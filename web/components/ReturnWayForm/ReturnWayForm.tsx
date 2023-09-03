'use client';

import {Routes} from "@/app/routes";
import {getFromDayParam} from "@/components/DatePicker/helpers";
import InputNumber from "@/components/InputNumber/InputNumber";
import {SortType} from "@/helpers/sort";
import {useJourneyPlanner} from "@/hooks/useJourneyPlanner";
import React from "react";

import AirportPicker from "@/components/AirportSelect/AirportPicker";
import Button, {ButtonType} from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import DatePicker  from "@/components/DatePicker/DatePicker";
import {PiAirplaneLandingLight, PiAirplaneTakeoffLight, PiCalendarBlankThin, PiUsersThreeThin} from "react-icons/pi";
import {Airport} from "../../../common/airports";


type OneWayFormProps = {
  airports: Airport[];
  initialLocationCodes?: string[][];
  initialDates?: Date[][];
  sortType: SortType;
  passengersCount?: number;
}

const today = new Date();

export default function ReturnWayForm({ airports, initialLocationCodes, initialDates, sortType, passengersCount: count }: OneWayFormProps) {
  const { locations, dates, passengersCount, possibleLocations, handleChange, searchUrl } = useJourneyPlanner({
    initialLocationCodes,
    initialDates,
    airports,
    baseUrl: Routes.RETURN,
    onlyDirect: false,
    sortType,
    passengersCount: count || 1,
  });

  return (
    <>
      <Card>
        <AirportPicker
          label='From'
          placeholder='Select up to 3 origin airports'
          name="locations[0]"
          airports={possibleLocations[0]}
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
          airports={possibleLocations[1]}
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
        <hr/>
        <DatePicker
          label='Return date'
          placeholder='Select return date'
          name="dates[1]"
          value={dates[1]}
          onChange={handleChange}
          from={getFromDayParam(dates[0], 1)}
          icon={<PiCalendarBlankThin/>}
        />
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