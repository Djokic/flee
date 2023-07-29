import {
  formatToDayPickerValue,
  parseFromDayPickerValue,
  prettifyDatePickerValue
} from "@/components/DatePicker/helpers";
import React, {useCallback} from 'react';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import Popover from '../Popover/Popover';

import styles from './DatePicker.module.scss';

import FieldContainer from '../FieldContainer/FieldContainer';

export enum DatePickerMode {
  Default = 'default',
  Single = 'single',
  Range = 'range',
  Multiple = 'multiple',
}

export type DatePickerValue = Date[];

type DatePickerProps = {
  label: string;
  name: string;
  placeholder: string;
  icon?: React.ReactNode;
  value?: DatePickerValue;
  onChange: (value: Record<string, Date[]>) => void;
  from?: Date;
  showOutsideDays?: boolean;
  numberOfMonths?: number;
}

function DatePicker({ label, placeholder, name, onChange, value, icon, from, showOutsideDays, numberOfMonths = 1 }: DatePickerProps) {
  const handleChange = useCallback((selected: DateRange | undefined) => {
    onChange({
      [name]: parseFromDayPickerValue(selected)
    });
  }, [name, onChange]);

  return (
    <Popover>
      <FieldContainer label={label} placeholder={placeholder} icon={icon}>
        {prettifyDatePickerValue(value)}
      </FieldContainer>

      <DayPicker
        mode="range"
        selected={formatToDayPickerValue(value)}
        className={styles.DatePicker}
        onSelect={handleChange}
        fromDate={from}
        showOutsideDays={showOutsideDays}
        numberOfMonths={numberOfMonths}
      />
    </Popover>
  );
}

export default React.memo(DatePicker);