import axios, { Axios } from 'axios';
import setCookie from 'set-cookie-parser';

import { getConnectionsForOperator } from 'helpers/common';
import { formatDate } from '@common/date';

import { AirlineClient, AirlineClientParams, Airport, Fare, Operator } from '@common/types';
import { getAirportsWithRoutes } from './airports';
import { getFares } from './fares';

export class TransaviaClient implements AirlineClient {
  private params: AirlineClientParams;
  public airports: Airport[] = [];
  public fares: Fare[] = [];

  public cookies: Record<string, string> = {};
  private axiosClient: Axios = axios.create({ withCredentials: true, timeout: 60_000 });

  constructor (params: AirlineClientParams) {
    this.params = params;

    this.axiosClient.interceptors.request.use(async (config) => {
      if (config?.url?.includes('/Api/')) {
        console.log({
          ...config.headers,
          ...this.headers
        });

        return {
          ...config,
          headers: {
            ...config.headers,
            ...this.headers
          }
        };
      }
      return config;
    });
    this.axiosClient.interceptors.response.use((response) => {
      const cookieStore = setCookie.parse(response?.headers?.['set-cookie'] as string[]);
      cookieStore.forEach((cookie) => {
        this.cookies[cookie.name] = cookie.value;
      });
      console.log(cookieStore);
      return response;
    });

    this.axiosClient.get('https://www.transavia.com/en-EU/book-a-flight/flights/search/');
  }

  private get headers () {
    return {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'request-id': '|287e5489c1c044e0b33a00662fbf474c.ce7b9023dc8a4158',
      'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      traceparent: '00-287e5489c1c044e0b33a00662fbf474c-ce7b9023dc8a4158-01',
      Cookie: Object.entries(this.cookies).map(([key, value]) => `${key}=${value}`).join('; ')
    };
  }

  public getAirports = async () => {
    this.airports = await getAirportsWithRoutes(this.axiosClient);
    return this.airports;
  };

  public getFares = async (airports: Airport[]) => {
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
