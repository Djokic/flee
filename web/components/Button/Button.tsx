import clsx from "clsx";
import Link from "next/link";
import React from 'react';

import styles from './Button.module.scss';

export enum ButtonType {
  Primary = 'primary',
  Minimal = 'minimal',
}

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: ButtonType;
  onClick?: () => void;
  href?: string;
  target?: string;
  disabled?: boolean;
  size?: number;
}

export default function Button({ children, className, type, onClick, href, target, disabled, size }: ButtonProps) {
  const classNames = clsx(styles.Button, className);
  const style = size ? {
    fontSize: `${size}rem`,
  } : undefined;

  if (href) {
    return (
      <Link href={href} target={target} onClick={onClick} data-type={type} className={classNames} aria-disabled={disabled} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} data-type={type} className={classNames} disabled={disabled} style={style}>
      {children}
    </button>
  );
}