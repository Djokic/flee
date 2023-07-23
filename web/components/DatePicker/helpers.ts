import {DateRange} from "react-day-picker";
import {format, eachDayOfInterval} from 'date-fns';


import {DatePickerValue} from "./DatePicker";

const dateFormat = 'dd. LLL yyyy';

function isDateRange(value: DatePickerValue): value is DateRange {
  return typeof value === 'object' && value !== null && 'from' in value && 'to' in value;
}

export function prettifyDatePickerValue(value: DatePickerValue): string {
  if (!value) {
    return '';
  }

  if (Array.isArray(value)) {
    return value.map(prettifyDatePickerValue).join(', ');
  }

  if (isDateRange(value)) {
    const {from, to} = value;
    return `${from && format(from, dateFormat)} ${to ? '- ' + format(to, dateFormat) : ''}`;
  }

  return format(value, dateFormat);
}

export function formatDatePickerValueAsParams(value?: DatePickerValue): string {
  if (!value) {
    return '';
  }

  if (Array.isArray(value)) {
    return value.map(formatDatePickerValueAsParams).join('.');
  }

  if (isDateRange(value)) {
    const {from, to} = value;
    return `${from && format(from, 'yyyy-MM-dd')}:${to && format(to, 'yyyy-MM-dd')}`;
  }

  return format(value, 'yyyy-MM-dd');
}

export function parseDatePickerValueFromParams(value: string): Date[] {
  if (!value) {
    return [];
  }

  if(value.includes(':')) {
    const [from, to] = value.split(':');
    return eachDayOfInterval({start: new Date(from), end: new Date(to)});
  }

  return value.split('.').map((date) => new Date(date));
}