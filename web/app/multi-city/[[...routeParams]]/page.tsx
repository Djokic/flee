import {Routes} from "@/app/routes";
import JourneyList from "@/components/JourneyList/JourneyList";
import {JourneyView} from "@/components/JourneyView/JourneyView";
import MultiCityForm from "@/components/MultiCityForm/MultiCityForm";
import ReturnWayForm from "@/components/ReturnWayForm/ReturnWayForm";
import SortControl from "@/components/SortControl/SortControl";
import StatusView from "@/components/StatusView/StatusView";

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
  title: 'Multi-City Journey',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
}

export default async function Page({params: {routeParams}}: PageParams) {
  const {locations, dates, sortType} = parseRouteParams(routeParams);
  const {airports, fares, airportCount, fareCount} = await getData({locations, dates, sortType});

  return (
    <SearchLayout baseUrl={Routes.MULTI_CITY} locations={locations} dates={dates} sortType={sortType} faresCount={fares.length}>
      <>
        <MultiCityForm
          airports={airports}
          initialLocationCodes={locations}
          initialDates={dates}
          sortType={sortType}
          maxLocations={5}
        />
        <StatusView airportCount={airportCount} fareCount={fareCount}/>
      </>

      <JourneyList data={fares} showNotFoundPlaceholder={Boolean(locations.length || dates.length)}/>
    </SearchLayout>

  )
}
