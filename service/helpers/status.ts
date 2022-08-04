import { Operator } from 'clients';
import { saveStatus } from 'helpers/db';

export enum ServiceStatusCode {
  IN_PROGRESS = 'IN_PROGRESS',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export type ServiceStatus = {
  _id?: string;
  code: ServiceStatusCode;
  startAt: number;
  endAt?: number;
  operator: Operator;
  error?: string;
  details?: string;
}

export async function setStatus (status: ServiceStatus) {
  return saveStatus(status);
}
