import React from 'react';
import clsx from 'clsx';

import styles from './SearchLayout.module.scss';

type SearchLayoutProps = {
  children: [React.ReactNode, React.ReactNode];
  header?: React.ReactNode;
  className?: string;
}

export default function SearchLayout({ children, header, className }: SearchLayoutProps) {
  const classNames = clsx(styles.SearchLayout, className);

  return (
    <div className={classNames}>
      <div className={styles.SearchLayout__Form}>
        {children[0]}
      </div>
      <div className={styles.SearchLayout__Results}>
        {header && (
          <div className={styles.SearchLayout__Header}>
            {header}
          </div>
        )}
        {children[1]}
      </div>
    </div>
  );
}