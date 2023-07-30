import React from "react";

import styles from './FieldContainer.module.scss';

type FieldContainerProps = {
  children: React.ReactNode;
  label: string;
  placeholder?: string;
  icon?: React.ReactNode;
}

const FieldContainer = React.forwardRef(({ children, label, placeholder, icon, ...rest }: FieldContainerProps, forwardedRef: React.ForwardedRef<HTMLDivElement>) =>  {
  return (
    <div className={styles.FieldContainer} {...rest} ref={forwardedRef} tabIndex={0}>
      <label>{label}</label>
      <div className={styles.Field}>
        {icon && <div className={styles.FieldContainer__Icon}>{icon}</div>}
        {React.Children.count(children) === 0 && (
          <div className={styles.Field__Placeholder}>
            {placeholder}
          </div>
        )}
        {children}
      </div>
    </div>
  );
});

FieldContainer.displayName = 'FieldContainer';

export default React.memo(FieldContainer);