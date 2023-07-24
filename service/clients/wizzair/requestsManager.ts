import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import setCookie from 'set-cookie-parser';
import axiosRetry from 'axios-retry';

import { getApiUrl } from './helpers';
import { wait } from 'helpers/wait';

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
  Referer: 'https://wizzair.com/en-gb/flights/fare-finder'
};

export class WizzAirRequestsManager {
  private axiosClient: AxiosInstance = axios.create({ withCredentials: true, timeout: 60_000 });
  private cookies: Record<string, string> = {};
  private requestsCount = 0;
  private initializationComplete: Promise<void>;

  constructor (private maxRequestsPerSession: number) {
    this.initializationComplete = this.initializeAxiosClient();
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
    this.axiosClient.interceptors.request.use(this.requestInterceptor);
    this.axiosClient.interceptors.response.use(this.responseInterceptor);
  };

  private login = async () => {
    await this.axiosClient.get('/userSession/new');
  };

  private doRequestPreCheck = async () => {
    await this.initializationComplete;

    if (this.requestsCount % this.maxRequestsPerSession === 0) {
      await this.login();
    }
    this.requestsCount++;

    // Add minimal delay between requests to avoid being blocked
    await wait(1000);
  };

  public get = async (url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    await this.doRequestPreCheck();
    return this.axiosClient.get(url, config);
  };

  public post = async (url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    await this.doRequestPreCheck();
    return this.axiosClient.post(url, data, config);
  };
}
