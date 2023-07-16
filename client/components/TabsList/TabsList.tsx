import {LinkProps} from "next/link";
import {useRouter} from "next/router";
import React, {ReactElement} from "react";
import styles from './TabsList.module.scss';

type TabsListProps = {
  children: ReactElement<LinkProps & { children: ReactElement}>[];
}

export function TabsList({ children }: TabsListProps) {
  return (
    <div className={styles.TabsList} role="tablist">
      {children}
    </div>
  );
}