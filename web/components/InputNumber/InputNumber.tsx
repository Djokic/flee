import FieldContainer from "@/components/FieldContainer/FieldContainer";
import React, {useCallback} from 'react';

import styles from './InputNumber.module.scss';

type InputNumberProps = {
  label: string;
  placeholder: string;
  name: string;
  value?: number;
  icon?: React.ReactNode;
  onChange: (value: Record<string, number>) => void;
}

export default function InputNumber({ label, placeholder, name, value, icon, onChange }: InputNumberProps) {
  const handleIncrease = () => onChange({ [name]: (value || 0) + 1 });
  const handleDecrease = () => onChange({ [name]: Math.max((Math.max((value || 1)) - 1), 1) });

  return (
    <FieldContainer label={label} icon={icon} placeholder={placeholder}>
      <div className={styles.InputNumber}>
        <div role="button" onClick={handleDecrease}>-</div>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          readOnly={true}
        />
        <div role="button" onClick={handleIncrease}>+</div>
      </div>
    </FieldContainer>
  );
}