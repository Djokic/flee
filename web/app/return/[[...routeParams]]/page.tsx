import {Routes} from "@/app/routes";
import JourneyList from "@/components/JourneyList/JourneyList";
import {JourneyView} from "@/components/JourneyView/JourneyView";
import ReturnWayForm from "@/components/ReturnWayForm/ReturnWayForm";
import SortControl from "@/components/SortControl/SortControl";

import {parseRouteParams} from "@/helpers/urlHelper";
import {Metadata} from "next";
import Head from "next/head";
import React from "react";

import SearchLayout from "@/components/SearchLayout/SearchLayout";
import {FareData} from "../../../../common/fares";

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

export default async function Page({params: {routeParams}}: PageParams) {
  const {locations, dates, sortType} = parseRouteParams(routeParams);
  const [origins = [], destinations = []] = locations;
  const [departures = [], arrivals = []] = dates;
  const {airports, fares} = await getData({origins, destinations, departures, arrivals, sortType});

  return (
    <SearchLayout baseUrl={Routes.RETURN} locations={locations} dates={dates} sortType={sortType} faresCount={fares.length} >
      <ReturnWayForm
        airports={airports}
        initialLocationCodes={locations}
        initialDates={dates}
        sortType={sortType}
      />

      <JourneyList data={fares} />
    </SearchLayout>
  )
}
