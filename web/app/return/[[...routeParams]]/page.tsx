import {Routes} from "@/app/routes";
import {JourneyView} from "@/components/JourneyView/JourneyView";
import ReturnForm from "@/components/ReturnForm/ReturnForm";
import SortControl from "@/components/SortControl/SortControl";
import { parseRouteParams} from "@/helpers/urlHelper";
import {Fare} from "@prisma/client";
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
  const [departureDates = [], returnDates =[]] = dates;
  const {airports, fares} = await getData(origins, destinations, departureDates, returnDates,  sortBy);
  const airportsMap = Object.fromEntries((airports.map(airport => [airport.code, airport])));

  return (
    <SearchLayout header={
      <SortControl
        label={`${fares.length} results found`}
        baseUrl={Routes.RETURN}
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
          Array.isArray(departureDates) && departureDates.length === 2
            ? {from: departureDates[0], to: departureDates[1]}
            : departureDates
        }
        returnDates={
          Array.isArray(returnDates) && returnDates.length === 2
            ? {from: returnDates[0], to: returnDates[1]}
            : returnDates
        }
      />
      <>
        {fares.map((fare: Fare[], index) => (
          <JourneyView airportsMap={airportsMap} fares={fare} key={index}/>
        ))}
      </>

    </SearchLayout>
  )
}
