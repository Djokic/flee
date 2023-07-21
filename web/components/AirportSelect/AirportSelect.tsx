import React, { useMemo } from "react";
import { Command } from "cmdk"
import * as Popover from '@radix-ui/react-popover';

import styles from './AirportSelect.module.scss';
import { Airport } from "@prisma/client";

type AirportSelectProps = {
  name: string;
  airports: Airport[];
  selectedAirports: Airport[];
  onChange: (airports: Airport[]) => void;
}

type AirportsGroup = {
  countryCode: string;
  countryName?: string;
  airports: Airport[];
}

function AirportSelect({ airports, selectedAirports, onAirportsSelect }: AirportSelectProps) {
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

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className={styles.AirportSelect__ValueField}>
          {selectedAirports.map((airport) => (
            <div key={airport.id} className={styles.AirportSelect__Value}>
              {airport.name}
            </div>
          ))}
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles.AirportSelect__Dropdown} sideOffset={5}>
          <Command>
            <div className={styles.AirportSelect__Search}>
              <Command.Input autoFocus placeholder="Find airports by name, code, country" />
            </div>
            <Command.List>
              {airportsByCountry.map(({ airports, countryCode, countryName }) => (
                <Command.Group 
                  key={countryCode} 
                  heading={countryName} 
                  className={styles.AirportSelect__CountryGroup}>
                  {airports.map((airport) => (
                    <Command.Item key={airport.id} value={`${airport.name}-${airport.countryName}`}>
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

export default React.memo(AirportSelect);


function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}
