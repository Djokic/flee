import React from 'react';
import * as Popover from '@radix-ui/react-popover';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

function DatePicker() {
  const [selected, setSelected] = React.useState<Date>();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div>{selected ? selected?.toISOString() : 'Pick a date'}</div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
        />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default React.memo(DatePicker);