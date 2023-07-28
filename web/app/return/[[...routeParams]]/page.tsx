import {Routes} from "@/app/routes";
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
}

export default async function Page({params: {routeParams}}: PageParams) {
  const {locations, dates, sortType} = parseRouteParams(routeParams);
  const [origins = [], destinations = []] = locations;
  const [departures = [], arrivals = []] = dates;
  const {airports, fares} = await getData({origins, destinations, departures, arrivals, sortType});

  return (
    <SearchLayout header={
      <SortControl
        faresCount={fares.length}
        baseUrl={Routes.RETURN}
        locations={locations}
        dates={dates}
        sortType={sortType}
      />
    }>
      <ReturnWayForm
        airports={airports}
        initialLocationCodes={locations}
        initialDates={dates}
        sortType={sortType}
      />

      <>
        {fares.map((data: FareData[], index) => (
          <JourneyView key={index} fares={data}/>
        ))}
      </>
    </SearchLayout>
  )
}
