import {Routes} from "@/app/routes";
import JourneyList from "@/components/JourneyList/JourneyList";
import ReturnWayForm from "@/components/ReturnWayForm/ReturnWayForm";
import StatusView from "@/components/StatusView/StatusView";

import {parseRouteParams} from "@/helpers/urlHelper";
import {Metadata} from "next";
import React from "react";

import SearchLayout from "@/components/SearchLayout/SearchLayout";

import {getData} from "./data";

type PageParams = {
  params: {
    routeParams: string[];
  }
}

export const metadata: Metadata = {
  title: 'Return Flights',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
}

export const revalidate = 3600;

export default async function Page({params: {routeParams}}: PageParams) {
  const {locations, dates, sortType, count} = parseRouteParams(routeParams);
  const [origins = [], destinations = []] = locations;
  const [departures = [], arrivals = []] = dates;
  const {airports, fares, airportCount, fareCount} = await getData({
    origins,
    destinations,
    departures,
    arrivals,
    sortType
  });

  return (
    <SearchLayout
      baseUrl={Routes.RETURN}
      locations={locations}
      dates={dates}
      sortType={sortType}
      faresCount={fares.length}
      passengersCount={count}
    >
      <>
        <ReturnWayForm
          airports={airports}
          initialLocationCodes={locations}
          initialDates={dates}
          sortType={sortType}
          passengersCount={count}
        />
        <StatusView airportCount={airportCount} fareCount={fareCount}/>
      </>

      <JourneyList
        data={fares}
        showNotFoundPlaceholder={Boolean(locations.length + dates.length)}
        passengersCount={count}
      />
    </SearchLayout>
  )
}
