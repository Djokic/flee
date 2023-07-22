import React, { useMemo, useCallback } from "react";
import { Command } from "cmdk"
import { Cross2Icon } from '@radix-ui/react-icons';
import Popover from "../Popover/Popover";

import styles from './AirportPicker.module.scss';
import { Airport } from "@prisma/client";
import FieldContainer from "../FieldContainer/FieldContainer";

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

function filterFn(value: string, search: string) {
  return value.toLowerCase().includes(search.trim().toLowerCase()) ? 1 : 0;
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
    <Popover>
      <FieldContainer label={label} placeholder={placeholder}>
        {selectedAirports.map((airport) => (
          <div key={airport.id} className={styles.AirportPicker__Value}>
            {airport.name} <Cross2Icon onClick={() => handleAirportRemove(airport)} />
          </div>
        ))}
      </FieldContainer>

      <Command filter={filterFn}>
        <div className={styles.AirportPicker__Search}>
          <Command.Input autoFocus placeholder="Find airports by name, code, country" />
        </div>
        <Command.List aria-disabled={isSelectionDisabled}>
          {airportsByCountry.map(({ airports, countryCode, countryName }) => (
            <Command.Group
              key={countryCode}
              heading={countryName}
              className={styles.AirportPicker__CountryGroup}>
              {airports.map((airport) => (
                <Command.Item
                  key={airport.id}
                  value={`${airport.name}_${airport.code}_${airport.countryName}`}
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
    </Popover>
  )
}

export default React.memo(AirportPicker);
