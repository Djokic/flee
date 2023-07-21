import React from "react";
import * as RadixScrollArea from '@radix-ui/react-scroll-area';

import styles from './ScrollArea.module.scss';

type ScrollAreaProps = {
  children: React.ReactNode;
}

function ScrollArea({ children }: ScrollAreaProps) {
  return (
    <RadixScrollArea.Root className={styles.ScrollArea}>
      <RadixScrollArea.Viewport className={styles.ScrollArea__Viewport}>
        {children}
      </RadixScrollArea.Viewport>
      <RadixScrollArea.Scrollbar className={styles.ScrollArea__Scrollbar} orientation="vertical">
        <RadixScrollArea.Thumb className={styles.ScrollArea__Thumb} />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Scrollbar className={styles.ScrollArea__Scrollbar} orientation="horizontal">
        <RadixScrollArea.Thumb className={styles.ScrollArea__Thumb} />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Corner className={styles.ScrollArea__Corner} />
    </RadixScrollArea.Root>
  );
}

export default React.memo(ScrollArea);