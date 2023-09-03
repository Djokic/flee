'use client';

import {Routes} from "@/app/routes";
import {getFromDayParam} from "@/components/DatePicker/helpers";
import InputNumber from "@/components/InputNumber/InputNumber";
import {SortType} from "@/helpers/sort";
import {useJourneyPlanner} from "@/hooks/useJourneyPlanner";
import React, {useCallback} from "react";

import AirportPicker from "@/components/AirportSelect/AirportPicker";
import Button, {ButtonType} from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import DatePicker from "@/components/DatePicker/DatePicker";
import {
  PiAirplaneInFlightLight,
  PiAirplaneTakeoffLight,
  PiCalendarBlankThin,
  PiUsersThreeThin,
  PiXCircleLight
} from "react-icons/pi";
import {Airport} from "../../../common/airports";

import styles from './MultiCityForm.module.scss';


type MultiCityFormProps = {
  airports: Airport[];
  initialLocationCodes?: string[][];
  initialDates?: Date[][];
  sortType: SortType;
  maxLocations?: number;
}

type JourneyRowProps = {
  index: number;
  possibleLocations: Airport[][];
  locations: Airport[][];
  dates: Date[][];
  handleChange: (event: Record<string, any>) => void;
  handleRemove: (index: number) => void;
}

function JourneyRow({index, possibleLocations, locations, dates, handleChange, handleRemove}: JourneyRowProps) {
  if (!locations[index + 1]) return null;

  return (
    <>
      <div className="flex" key={index}>
        <AirportPicker
          label="Go To"
          placeholder='Select airport'
          name={`locations[${index + 1}]`}
          airports={possibleLocations[index + 1]}
          value={locations[index + 1]}
          maxSelected={1}
          onChange={handleChange}
          icon={<PiAirplaneInFlightLight/>}
        />

        <DatePicker
          label='On Date'
          placeholder='Departure date'
          name={`dates[${index}]`}
          value={dates[index]}
          onChange={handleChange}
          from={getFromDayParam(dates[index - 1], 0)}
          icon={<PiCalendarBlankThin/>}
        />

        <div role="button" className={styles.MultiCityForm__RemoveButton} onClick={() => handleRemove(index)}>
          <PiXCircleLight/>
        </div>
      </div>
      <hr/>
    </>
  )
}

export default function MultiCityForm({airports, initialLocationCodes, initialDates, sortType, maxLocations = 5}: MultiCityFormProps) {
  const {locations, dates, possibleLocations, passengersCount, handleChange, searchUrl} = useJourneyPlanner({
    initialLocationCodes,
    initialDates,
    airports,
    baseUrl: Routes.MULTI_CITY,
    onlyDirect: true,
    sortType,
  });

  const handleRemove = useCallback((index: number) => {
    const newLocations = locations.filter((_, i) => i !== index + 1);
    const newDates = dates.filter((_, i) => i !== index);
    handleChange({locations: newLocations});
    handleChange({dates: newDates});
  }, [locations, dates, handleChange]);

  const handleAdd = useCallback(() => {
    if (locations.length >= maxLocations) return;

    const newLocations = [...locations, []];
    const newDates = [...dates, []];
    handleChange({locations: newLocations});
    handleChange({dates: newDates});
  }, [locations, maxLocations, dates, handleChange]);

  return (
    <>
      <Card className={styles.MultiCityForm}>
        <AirportPicker
          label="Start From"
          placeholder='Select airport'
          name={`locations[0]`}
          airports={airports}
          value={locations[0]}
          maxSelected={1}
          onChange={handleChange}
          icon={<PiAirplaneTakeoffLight/>}
        />

        <hr/>

        {locations.map((location, index) => (
            <JourneyRow
              key={index}
              index={index}
              possibleLocations={possibleLocations}
              locations={locations}
              dates={dates}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
          ))}

        {locations.length < maxLocations && (
          <Button type={ButtonType.Minimal} className={styles.MultiCityForm__AddButton} onClick={handleAdd}>
            Add City
          </Button>
        )}

        <hr/>
        <InputNumber
          label="Number of Passengers"
          placeholder="1"
          name="passengersCount"
          value={passengersCount}
          onChange={handleChange}
          icon={<PiUsersThreeThin/>}
        />
      </Card>



      <Button type={ButtonType.Primary} size={1} href={searchUrl} disabled={!searchUrl}>
        Search
      </Button>
    </>
  );
}