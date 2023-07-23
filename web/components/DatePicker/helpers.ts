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

export function formatDatePickerValueAsParams(value?: DatePickerValue): Date[] {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value as Date[];
  }

  if (isDateRange(value)) {
    const {from, to} = value;
    return [from, to].filter(Boolean) as Date[];
  }

  return Object.keys(value).length ? [value as Date] : [];
}