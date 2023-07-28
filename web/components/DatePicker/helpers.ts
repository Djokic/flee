import {DateRange} from "react-day-picker";
import {format} from 'date-fns';

const dateFormat = 'dd. LLL yyyy';

export function prettifyDatePickerValue(value?: Date[]): React.ReactNode {
  if (!value || !value.length) {
    return null;
  }

  const [from, to] = value;
  return `${from && format(from, dateFormat)} ${to ? '- ' + format(to, dateFormat) : ''}`;
}

export function formatToDayPickerValue(value?: Date[]): DateRange  {
  const [from, to] = value || [];
  return {
    from,
    to,
  };
}

export function parseFromDayPickerValue(value?: DateRange): Date[]{
  if (!value) {
    return [];
  }

  const {from, to} = value;
  return [from, to].filter(Boolean) as Date[];
}

export function getFromDayParam(value?: Date[], offset: number = 0): Date {
  const day = value?.[1] || value?.[0] || new Date();
  day.setDate(day.getDate() + offset);
  return day;
}