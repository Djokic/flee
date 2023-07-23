import React from 'react';
import clsx from 'clsx';

import styles from './Card.module.scss';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  padding?: number;
}

export default function Card({ children, className, style, padding = 0 }: CardProps) {
  const computedStyle = {
    ...style,
    ...(padding ? { padding } : {})
  };

  const classNames = clsx(styles.Card, className);

  return (
    <div className={classNames} style={computedStyle}>
      {children}
    </div>
  );
}