import {Routes} from "@/app/routes";
import OneWayList from "@/components/OneWayList/OneWayList";
import RadioGroup from "@/components/RadioGroup/RadioGroup";
import ReturnForm from "@/components/ReturnForm/ReturnForm";
import SortControl from "@/components/SortControl/SortControl";
import {TabsList} from "@/components/TabsList/TabsList";
import {SortType} from "@/helpers/sort";
import {createRouteUrl, parseLocationsAndDates, parseRouteParams} from "@/helpers/urlHelper";
import {FaresSortBy} from "@/hooks/useOneWayFares/useOneWayFares";
import Link from "next/link";
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
  const [departures = [], returnDates =[]] = dates;
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
      <ReturnForm
        airports={airports}
        origins={airports.filter(airport => origins?.includes(airport.code))}
        destinations={airports.filter(airport => destinations?.includes(airport.code))}
        departureDates={
          Array.isArray(departures) && departures.length === 2
            ? {from: departures[0], to: departures[1]}
            : departures
        }
        returnDates={
          Array.isArray(returnDates) && returnDates.length === 2
            ? {from: returnDates[0], to: returnDates[1]}
            : returnDates
        }
      />
      <></>

    </SearchLayout>
  )
}
