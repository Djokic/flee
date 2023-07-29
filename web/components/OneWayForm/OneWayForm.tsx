'use client';

import {Routes} from "@/app/routes";
import {SortType} from "@/helpers/sort";
import {useJourneyPlanner} from "@/hooks/useJourneyPlanner";
import React from "react";
import { PiAirplaneTakeoffLight, PiAirplaneLandingLight, PiCalendarBlankThin } from "react-icons/pi";

import AirportPicker from "@/components/AirportSelect/AirportPicker";
import Button, {ButtonType} from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import DatePicker  from "@/components/DatePicker/DatePicker";
import {Airport} from "../../../common/airports";


type OneWayFormProps = {
  airports: Airport[];
  initialLocationCodes?: string[][];
  initialDates?: Date[][];
  sortType: SortType;
}

const today = new Date();

export default function OneWayForm({ airports, initialLocationCodes, initialDates, sortType }: OneWayFormProps) {
  const { locations, dates, possibleLocations, handleChange, searchUrl } = useJourneyPlanner({
    initialLocationCodes,
    initialDates,
    airports,
    baseUrl: Routes.ONE_WAY,
    onlyDirect: false,
    sortType,
  });

  return (
    <>
      <Card>
        <AirportPicker
          label='From'
          placeholder='Select up to 3 origin airports'
          name="locations[0]"
          airports={airports}
          value={locations[0]}
          maxSelected={3}
          onChange={handleChange}
          icon={<PiAirplaneTakeoffLight/>}
        />
        <hr/>
        <AirportPicker
          label='To'
          placeholder='Select up to 3 destination airports'
          name="locations[1]"
          airports={airports}
          value={locations[1]}
          onChange={handleChange}
          maxSelected={3}
          icon={<PiAirplaneLandingLight/>}
        />
        <hr/>
        <DatePicker
          label='Departure date'
          placeholder='Select departure date'
          name="dates[0]"
          value={dates[0]}
          onChange={handleChange}
          from={today}
          icon={<PiCalendarBlankThin/>}
        />
      </Card>

      <Button type={ButtonType.Primary} size={1} href={searchUrl} disabled={!searchUrl}>
        Search
      </Button>
    </>
  );
}