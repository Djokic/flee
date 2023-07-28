'use client';

import {Routes} from "@/app/routes";
import {getFromDayParam} from "@/components/DatePicker/helpers";
import {SortType} from "@/helpers/sort";
import {useJourneyPlanner} from "@/hooks/useJourneyPlanner";
import {values} from "lodash";
import React, {useCallback} from "react";

import AirportPicker from "@/components/AirportSelect/AirportPicker";
import Button, {ButtonType} from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import DatePicker from "@/components/DatePicker/DatePicker";
import {BiX} from "react-icons/bi";
import {Airport} from "../../../common/airports";

import styles from './MultiCityForm.module.scss';


type MultiCityFormProps = {
  airports: Airport[];
  initialLocationCodes?: string[][];
  initialDates?: Date[][];
  sortType: SortType;
  maxStops?: number;
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
        />

        <DatePicker
          label='On Date'
          placeholder='Select departure date'
          name={`dates[${index}]`}
          value={dates[index]}
          onChange={handleChange}
          from={getFromDayParam(dates[index - 1], 0)}
        />


        <div
          role="button"
          data-disabled={index === 0 || !locations[index + 1]?.length || !dates[index]?.length}
          className={styles.MultiCityForm__RemoveButton}
          onClick={() => handleRemove(index)}
        >
          <BiX/>
        </div>
      </div>
      <hr/>
    </>
  )
}

export default function MultiCityForm({airports, initialLocationCodes, initialDates, sortType}: MultiCityFormProps) {
  const {locations, dates, possibleLocations, handleChange, searchUrl} = useJourneyPlanner({
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
        />

        <hr/>

        {locations.map((location, index) => (
          index > 3 ? null : (
            <JourneyRow
              key={index}
              index={index}
              possibleLocations={possibleLocations}
              locations={locations}
              dates={dates}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
          )))}
      </Card>

      <Button type={ButtonType.Primary} size={1} href={searchUrl} disabled={!searchUrl}>
        Search
      </Button>
    </>
  );
}