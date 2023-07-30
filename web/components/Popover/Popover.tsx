import {Align} from "@radix-ui/react-popper";
import React from 'react';
import clsx  from "clsx";
import * as RadixPopover from '@radix-ui/react-popover';

import styles from './Popover.module.scss';

type PopoverProps = {
  children: [React.ReactNode, React.ReactNode];
  popoverClassName?: string;
  offset?: number;
  align?: Align;
}

function Popover({ children, popoverClassName, offset = 3, align }: PopoverProps) {
  const popoverClassNames = clsx(styles.Popover, popoverClassName);

  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild >
        {children[0]}
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content className={popoverClassNames} sideOffset={offset} align={align}>
          {children[1]}
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}

export default React.memo(Popover);