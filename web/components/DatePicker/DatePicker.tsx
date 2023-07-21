import React from 'react';
import { DateRange, DayPicker, DayPickerProps } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import Popover from '../Popover/Popover';

import styles from './DatePicker.module.scss';

import { format } from 'date-fns';
import FieldContainer from '../FieldContainer/FieldContainer';

export enum DatePickerMode {
  Default = 'default',
  Single = 'single',
  Range = 'range',
  Multiple = 'multiple',
}

type DatePickerProps = {
  label: string;
  name: string;
  placeholder: string;
  mode?: DatePickerMode;
} & DayPickerProps;


function DatePicker({ label, placeholder, name, ...rest }: DatePickerProps) {
  return (
    <Popover>
      <FieldContainer label={label} placeholder={placeholder}>

        {rest.selected ? format(rest.selected as Date, 'dd/MM/yyyy') : undefined}
      </FieldContainer>

      <DayPicker {...rest} className={styles.DatePicker}/>
    </Popover>
  );
}

export default React.memo(DatePicker);