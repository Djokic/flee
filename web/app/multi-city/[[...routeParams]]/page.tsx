import {Routes} from "@/app/routes";
import {JourneyView} from "@/components/JourneyView/JourneyView";
import MultiCityForm from "@/components/MultiCityForm/MultiCityForm";
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
  title: 'Multi-City Journey',
}

export default async function Page({params: {routeParams}}: PageParams) {
  const {locations, dates, sortType} = parseRouteParams(routeParams);
  const {airports, fares} = await getData({locations, dates, sortType});

  return (
    <SearchLayout header={
      <SortControl
        faresCount={fares.length}
        baseUrl={Routes.MULTI_CITY}
        locations={locations}
        dates={dates}
        sortType={sortType}
      />
    }>
      <MultiCityForm
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
