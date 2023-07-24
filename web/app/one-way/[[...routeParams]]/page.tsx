import {Routes} from "@/app/routes";
import SortControl from "@/components/SortControl/SortControl";

import { parseRouteParams} from "@/helpers/urlHelper";
import React from "react";

import OneWayForm from "@/components/OneWayForm/OneWayForm";
import SearchLayout from "@/components/SearchLayout/SearchLayout";
import FareView from "@/components/FareView/FareView";

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
  const airportsMap = new Map(airports.map(airport => [airport.code, airport]));

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
        {fares.map(fare => (
          <FareView
            fare={fare}
            origin={airportsMap.get(fare.origin)!}
            destination={airportsMap.get(fare.destination)!}
            key={`${fare.origin}-${fare.destination}-${fare.date}`}
          />
        ))}
      </>
    </SearchLayout>
  )
}
