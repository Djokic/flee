import React, { useMemo, useCallback } from "react";
import { Command } from "cmdk"
import * as Popover from '@radix-ui/react-popover';
import { Cross2Icon } from '@radix-ui/react-icons';

import styles from './AirportPicker.module.scss';
import { Airport } from "@prisma/client";

type AirportPickerProps = {
  label: string;
  placeholder: string;
  name: string;
  airports: Airport[];
  selectedAirports: Airport[];
  maxSelected?: number;
  onChange: (airports: Airport[]) => void;
}

type AirportsGroup = {
  countryCode: string;
  countryName?: string;
  airports: Airport[];
}

function AirportPicker({ airports, selectedAirports, maxSelected, label, placeholder, onChange }: AirportPickerProps) {
  const airportsByCountry: AirportsGroup[] = useMemo(() => {
    const airportsByCountryMap: Record<string, Airport[]> = {};
    airports.forEach((airport) => {
      const countryCode = airport.countryCode.toLocaleLowerCase();
      airportsByCountryMap[countryCode] = airportsByCountryMap[countryCode] || [];
      airportsByCountryMap[countryCode].push(airport);
    });

    return Object.entries(airportsByCountryMap).map(([countryCode, airports]) => ({ 
      countryCode,
      airports: airports.sort((a, b) => a.name.localeCompare(b.name)),
      countryName: airports[0].countryName,
    })).sort((a, b) => a.countryName.localeCompare(b.countryName));
  }, [airports]);

  const handleAirportPicker = useCallback((airport: Airport) => {
    // Do not select the same airport twice
    if (selectedAirports.find((a) => a.id === airport.id)) {
      return;
    }

    // Do not select more than maxSelected
    if (maxSelected && selectedAirports.length >= maxSelected) {
      return;
    }
    
    onChange([...selectedAirports, airport]);
  }, [selectedAirports, onChange]);

  const handleAirportRemove = useCallback((airport: Airport) => {
    onChange(selectedAirports.filter((a) => a.id !== airport.id));
  }, [selectedAirports, onChange]);

  const isSelectionDisabled = Boolean(maxSelected && selectedAirports.length >= maxSelected);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className={styles.AirportPicker__FieldContainer}>
          <label className={styles.AirportPicker__Label}>{label}</label>
          <div className={styles.AirportPicker__Field}>
            {selectedAirports.length === 0 && (
              <div className={styles.AirportPicker__Placeholder}>
                {placeholder}
              </div>
            )}

            {selectedAirports.map((airport) => (
              <div key={airport.id} className={styles.AirportPicker__Value}>
                {airport.name} <Cross2Icon onClick={() => handleAirportRemove(airport)}/>
              </div>
            ))}
          </div>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles.AirportPicker__Dropdown} aria-disabled={isSelectionDisabled}>
          <Command>
            <div className={styles.AirportPicker__Search}>
              <Command.Input autoFocus placeholder="Find airports by name, code, country" />
            </div>
            <Command.List >
              {airportsByCountry.map(({ airports, countryCode, countryName }) => (
                <Command.Group 
                  key={countryCode} 
                  heading={countryName} 
                  className={styles.AirportPicker__CountryGroup}>
                  {airports.map((airport) => (
                    <Command.Item 
                      key={airport.id} 
                      value={`${airport.name} ${airport.code} ${airport.countryName}`}
                      onSelect={() => handleAirportPicker(airport)}
                    >
                      {airport.name}
                      <small>
                        {airport.code}
                      </small>
                    </Command.Item>
                  ))}
                </Command.Group>
              ))}
            </Command.List>
          </Command>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default React.memo(AirportPicker);
