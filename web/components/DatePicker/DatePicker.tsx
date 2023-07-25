import {prettifyDatePickerValue} from "@/components/DatePicker/helpers";
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

export type DatePickerValue = Date | Date[] | DateRange | undefined;

type DatePickerProps = {
  label: string;
  name: string;
  placeholder: string;
  value?: DatePickerValue;
  mode?: DatePickerMode;
  onChange: (value: Record<string, DatePickerValue>) => void;
}

function DatePicker({ label, placeholder, mode = DatePickerMode.Range, name, onChange, value }: DatePickerProps) {
  const handleChange = useCallback((selected: DatePickerValue) => {
    onChange({
      [name]: selected
    });
  }, [name, onChange]);

  return (
    <Popover>
      <FieldContainer label={label} placeholder={placeholder}>
        {value ? (prettifyDatePickerValue(value)) : undefined}
      </FieldContainer>

      <DayPicker
        mode="range"
        selected={value}
        className={styles.DatePicker}
        onSelect={handleChange}
        minDate={new Date()}
      />
    </Popover>
  );
}

export default React.memo(DatePicker);