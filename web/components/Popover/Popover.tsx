import React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';

import styles from './Popover.module.scss';


type PopoverProps = {
  children: [React.ReactNode, React.ReactNode];
}

function Popover({ children }: PopoverProps) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>
        {children[0]}
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content className={styles.Popover}>
          {children[1]}
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}

export default React.memo(Popover);