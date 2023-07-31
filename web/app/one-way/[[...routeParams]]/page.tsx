import {Routes} from "@/app/routes";
import JourneyList from "@/components/JourneyList/JourneyList";
import {JourneyView} from "@/components/JourneyView/JourneyView";
import SortControl from "@/components/SortControl/SortControl";
import StatusView from "@/components/StatusView/StatusView";

import {parseRouteParams} from "@/helpers/urlHelper";
import {Metadata} from "next";
import React from "react";

import OneWayForm from "@/components/OneWayForm/OneWayForm";
import SearchLayout from "@/components/SearchLayout/SearchLayout";
import {FareData} from "../../../../common/fares";

import {getData} from "./data";

type PageParams = {
  params: {
    routeParams: string[];
  }
}

export const metadata: Metadata = {
  title: 'One-Way Flights',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
}

export const revalidate = 3600;

export default async function Page({params: {routeParams}}: PageParams) {
  const {locations, dates, sortType} = parseRouteParams(routeParams);
  const [origins = [], destinations = []] = locations;
  const [departures = []] = dates;
  const {airports, fares, airportCount, fareCount} = await getData({origins, destinations, departures, sortType});

  return (
    <SearchLayout
      baseUrl={Routes.ONE_WAY}
      locations={locations}
      dates={dates}
      sortType={sortType}
      faresCount={fares.length}
    >
      <>
        <OneWayForm
          airports={airports}
          initialLocationCodes={locations}
          initialDates={dates}
          sortType={sortType}
        />
        <StatusView airportCount={airportCount} fareCount={fareCount}/>
      </>

      <JourneyList data={fares} showNotFoundPlaceholder={Boolean(locations.length + dates.length)}/>
    </SearchLayout>
  )
}
