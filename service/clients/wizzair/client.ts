import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Prisma, Operator, Airport } from '@prisma/client';

import { getConnectionsForOperator } from 'helpers/common';
import { getApiUrl } from './helpers';
import { formatDate } from '@common/date';
import setCookie from 'set-cookie-parser';

import { AirlineClient, AirlineClientParams } from '@common/types';
import { getAirportsWithRoutes } from './airports';
import { getFares } from './fares';
import axiosRetry from 'axios-retry';

const defaultRequestHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': 'https://wizzair.com',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Safari/605.1.15',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'en-gb',
  Accept: 'application/json, text/plain, */*',
  Host: 'be.wizzair.com',
  Origin: 'https://wizzair.com',
  Connection: 'keep-alive',
  Referer: 'https://wizzair.com/en-gb/flights/fare-finder',
};

export class WizzAirClient implements AirlineClient {
  private static readonly MAX_REQUESTS_PER_SESSION = 5;
  private faresCache: Prisma.FareCreateInput[] = [];

  public cookies: Record<string, string> = {};
  private axiosClient: AxiosInstance = axios.create({ withCredentials: true, timeout: 60_000 });

  constructor (private params: AirlineClientParams) {
    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.axiosClient.interceptors.request.use(this.requestInterceptor);
    this.axiosClient.interceptors.response.use(this.responseInterceptor);
  }

  private requestInterceptor = (config: AxiosRequestConfig) => {
    return {
      ...config,
      headers: this.headers
    };
  };

  private responseInterceptor = (response: AxiosResponse) => {
    const cookieStore = setCookie.parse(response?.headers?.['set-cookie'] as string[]);
    cookieStore.forEach((cookie) => {
      this.cookies[cookie.name] = cookie.value;
    });
    return response;
  };

  private getCookieString = () => {
    return Object.entries(this.cookies).map(([key, value]) => `${key}=${value}`).join('; ');
  };

  private get headers () {
    return {
      Cookie: this.getCookieString(),
      ...defaultRequestHeaders,
      ...this.cookies.RequestVerificationToken
        ? { 'X-RequestVerificationToken': this.cookies?.RequestVerificationToken }
        : {}
    };
  }

  private initializeAxiosClient = async () => {
    if (!this.axiosClient.defaults.baseURL) {
      this.axiosClient.defaults.baseURL = await getApiUrl();
      axiosRetry(this.axiosClient, { retries: 3, retryDelay: axiosRetry.exponentialDelay });
    }
  };

  private login = async () => {
    await this.axiosClient.get('/userSession/new');
  };

  public getAirports = async () => {
    await this.initializeAxiosClient();
    await this.login();
    return await getAirportsWithRoutes(this.axiosClient);
  };

  public getFaresForAirports = async (airports: Airport[]) => {
    this.faresCache = [];

    await this.initializeAxiosClient();
    const fetchedConnectionsFlags: Record<string, boolean> = {};
    let reqestsCount = 0;

    const totalConnections = airports.flatMap((airport) => getConnectionsForOperator(airport, Operator.WIZZAIR)).length;
    let currentConnection = 0;

    for (const airport of airports) {
      const connections = getConnectionsForOperator(airport, Operator.WIZZAIR);

      for (const connection of connections) {
        const notAlreadyFetched =
          !fetchedConnectionsFlags[`${airport.code}-${connection.code}`] ||
          !fetchedConnectionsFlags[`${connection.code}-${airport.code}`];

        if (notAlreadyFetched) {
          if (reqestsCount % WizzAirClient.MAX_REQUESTS_PER_SESSION === 0) {
            await this.login();
          }
          reqestsCount++;
          
          currentConnection++;
          console.log(`[WizzAir][${currentConnection}/${totalConnections}] -> ${airport.code} <--> ${connection.code} `);
          
          let fares: Prisma.FareCreateInput[] = [];

          try {
            fares = await getFares(this.axiosClient, {
              origin: airport.code,
              destination: connection.code,
              startDate: formatDate(new Date()),
              lookupDays: this.params.lookupDays
            });
            fetchedConnectionsFlags[`${airport.code}-${connection.code}`] = true;
            fetchedConnectionsFlags[`${connection.code}-${airport.code}`] = true;
          } catch (error) {
            console.log(`[Error!][WizzAir] -> ${airport.code} <--> ${connection.code} -> ${(error as AxiosError).message || error}`);
          }
          
          this.faresCache = [...this.faresCache, ...fares];
        }
      }
    }

    return this.faresCache;
  };
}
