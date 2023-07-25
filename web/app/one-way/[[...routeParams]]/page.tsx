import {Routes} from "@/app/routes";
import {JourneyView} from "@/components/JourneyView/JourneyView";
import SortControl from "@/components/SortControl/SortControl";

import { parseRouteParams} from "@/helpers/urlHelper";
import {Fare} from "@prisma/client";
import React from "react";

import OneWayForm from "@/components/OneWayForm/OneWayForm";
import SearchLayout from "@/components/SearchLayout/SearchLayout";

import {getData} from "./data";

type PageParams = {
  params: {
    routeParams: string[];
  }
}

export default async function Page({params: {routeParams}}: PageParams) {
  const { locations, dates, sortBy } = parseRouteParams(routeParams);
  const [origins = [], destinations = []] = locations;
  const [departures = []] = dates;
  const {airports, fares} = await getData(origins, destinations, departures, sortBy);
  const airportsMap = Object.fromEntries((airports.map(airport => [airport.code, airport])));

  return (
    <SearchLayout header={
      <SortControl
        label={`${fares.length} results found`}
        baseUrl={Routes.ONE_WAY}
        locations={locations}
        dates={dates}
        currentSortBy={sortBy}
      />
    }>
      <OneWayForm
        airports={airports}
        origins={airports.filter(airport => origins?.includes(airport.code))}
        destinations={airports.filter(airport => destinations?.includes(airport.code))}
        departureDates={
          Array.isArray(departures) && departures.length === 2
            ? {from: departures[0], to: departures[1]}
            : departures
        }
      />

      <>
        {fares.map((fare: Fare | Fare[], index) => (
          <JourneyView
            key={index}
            airportsMap={airportsMap}
            fares={fare}
          />
        ))}
      </>
    </SearchLayout>
  )
}
