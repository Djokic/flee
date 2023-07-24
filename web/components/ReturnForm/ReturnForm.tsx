'use client';

import {Routes} from "@/app/routes";
import {formatDatePickerValueAsParams} from "@/components/DatePicker/helpers";
import {formatLocationsAndDates} from "@/helpers/urlHelper";
import React, {useMemo} from "react";

import useForm from "@/hooks/useForm/useForm";
import {Airport} from "@prisma/client";

import AirportPicker from "@/components/AirportSelect/AirportPicker";
import Button, {ButtonType} from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import DatePicker, {DatePickerMode, DatePickerValue} from "@/components/DatePicker/DatePicker";


type OneWayFormProps = {
  airports: Airport[];
  origins?: Airport[];
  destinations?: Airport[];
  departureDates?: DatePickerValue;
  returnDates?: DatePickerValue;
}

export default function ReturnForm({ airports, origins, destinations, departureDates, returnDates }: OneWayFormProps) {
  const { values, handleChange } = useForm({
    initialValues: { origins, destinations, departureDates, returnDates }
  });

  const possibleDestinations = useMemo(() => {
    values.origins
      ?.map(airport => airport.code)
      .join(',');
    return airports.filter(airport => airport.code !== values.origins?.[0]?.code);
  }, [values.origins, airports]);

  const searchUrl = useMemo(() => {
    const originCodes = values.origins?.map(airport => airport.code) || [];
    const destinationCodes = values.destinations?.map(airport => airport.code) || [];
    const departureDates = formatDatePickerValueAsParams(values.departureDates);
    const returnDates = formatDatePickerValueAsParams(values.returnDates);
    const { locations, dates} = formatLocationsAndDates({
      locations: [originCodes, destinationCodes],
      dates: [departureDates, returnDates]
    })
    return `${Routes.RETURN}/${locations}/${dates}`
  }, [values.origins, values.destinations, values.departureDates, values.returnDates]);

  return (
    <>
      <Card>
        <AirportPicker
          label='From'
          placeholder='Select up to 3 origin airports'
          name="origins"
          airports={airports}
          value={values.origins}
          maxSelected={3}
          onChange={handleChange}
        />
        <hr/>
        <AirportPicker
          label='To'
          placeholder='Select up to 3 destination airports'
          name="destinations"
          airports={possibleDestinations}
          value={values.destinations}
          onChange={handleChange}
        />
        <hr/>
        <DatePicker
          label='Departure date'
          placeholder='Select departure date'
          name="departureDates"
          mode={DatePickerMode.Range}
          value={values.departureDates}
          onChange={handleChange}
        />
        <hr/>
        <DatePicker
          label='Return date'
          placeholder='Select return date'
          name="returnDates"
          mode={DatePickerMode.Range}
          value={values.returnDates}
          onChange={handleChange}
        />
      </Card>

      <Button type={ButtonType.Primary} size={1} href={searchUrl} disabled={!searchUrl}>
        Search
      </Button>
    </>
  );
}