import React from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';

import styles from './RadioGroup.module.scss';

export enum RadioGroupOrientation {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

type RadioGroupProps<T> = {
  value: T;
  items: {
    label: string;
    value: T;
  }[];
  onChange: (value: T) => void;
  orientation?: RadioGroupOrientation
}

function RadioGroup<T>({ value, items, onChange, orientation = RadioGroupOrientation.Horizontal }: RadioGroupProps<T>) {
  return (
    <RadixRadioGroup.Root 
      className={styles.RadioGroup} 
      value={value as string} 
      onValueChange={onChange as (value: string) => void} 
      data-orientation={orientation}
    >
      {items.map((item) => (
        <div className={styles.RadioGroup__ItemWrapper} key={item.label + item.value}>
          <RadixRadioGroup.Item className={styles.RadioGroup__Item} value={item.value as string} id={item.label + item.value}>
            <RadixRadioGroup.Indicator className={styles.RadioGroup__Item__Indicator} />
          </RadixRadioGroup.Item>
          <label htmlFor={item.label + item.value}>
            {item.label}
          </label>
        </div>
      ))}
    </RadixRadioGroup.Root>
  )
}

export default RadioGroup;