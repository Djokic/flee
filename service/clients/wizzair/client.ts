import axios, { Axios } from 'axios';

import { getConnectionsForOperator } from '../helpers';
import { getApiUrl } from './helpers';
import { formatDate } from '../../helpers/date';
import setCookie from 'set-cookie-parser';

import { AirlineClient, AirlineClientParams, Airport, Fare, Operator } from '../types';
import { getAirportsWithRoutes } from './airports';
import { getFares } from './fares';

export class WizzAirClient implements AirlineClient {
  private params: AirlineClientParams;
  public airports: Airport[] = [];
  public fares: Fare[] = [];

  public cookies: Record<string, string> = {};
  private axiosClient: Axios = axios.create({ withCredentials: true, timeout: 60_000 });

  constructor (params: AirlineClientParams) {
    this.params = params;

    this.axiosClient.interceptors.request.use(async (config) => {
      console.log(`[WizzAir] Sending request to ${config.url}`);
      return {
        ...config,
        headers: this.headers
      };
    });
    this.axiosClient.interceptors.response.use((response) => {
      const cookieStore = setCookie.parse(response?.headers?.['set-cookie'] as string[]);
      cookieStore.forEach((cookie) => {
        this.cookies[cookie.name] = cookie.value;
      });
      return response;
    });
  }

  private get headers () {
    return {
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
      Cookie: Object.entries(this.cookies).map(([key, value]) => `${key}=${value}`).join('; '),

      ...this.cookies.RequestVerificationToken
        ? { 'X-RequestVerificationToken': this.cookies?.RequestVerificationToken }
        : {}
    };
  }

  private initializeAxiosClient = async () => {
    if (!this.axiosClient.defaults.baseURL) {
      this.axiosClient.defaults.baseURL = await getApiUrl();
    }
  };

  private login = async () => {
    await this.axiosClient.get('/userSession/new');
  };

  public getAirports = async () => {
    await this.initializeAxiosClient();
    await this.login();
    this.airports = await getAirportsWithRoutes(this.axiosClient);
    return this.airports;
  };

  public getFares = async (airports: Airport[]) => {
    await this.initializeAxiosClient();
    await this.login();
    for (const airport of airports) {
      const connections = getConnectionsForOperator(airport, Operator.WIZZAIR);
      for (const connection of connections) {
        const fares = await getFares(this.axiosClient, {
          origin: airport.code,
          destination: connection.code,
          startDate: formatDate(new Date()),
          lookupDays: this.params.lookupDays
        });
        this.fares = [...this.fares, ...fares];
      }
    }
    return this.fares;
  };
}
