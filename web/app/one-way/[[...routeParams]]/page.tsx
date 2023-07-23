import FareView from "@/components/FareView/FareView";
import React from "react";

import OneWayForm from "@/components/OneWayForm/OneWayForm";
import SearchLayout from "@/components/SearchLayout/SearchLayout";
import {prisma} from "@/helpers/prisma";
import {getUrlArrayParam} from "@/helpers/query";

type PageParams = {
  params: {
    routeParams: string[];
  }
}

async function getData(origins: string, destinations: string, departures: string) {
  const originsArray = getUrlArrayParam(origins);
  const destinationsArray = getUrlArrayParam(destinations);
  const departuresArray = getUrlArrayParam(departures);

  const airports = await prisma.airport.findMany();

  if (!originsArray) {
    return {
      airports,
      fares: [],
    }
  }

  const fares = await prisma.fare.findMany({
    where: {
      origin: {
          in: originsArray
      },
      ...(Array.isArray(destinationsArray) ? { destination: { in: destinationsArray } } : {}),
      ...(Array.isArray(departuresArray) ? { date: { in: departuresArray } } : {}),
    }
  });

  return {
    airports,
    fares,
  }
}

export default async function Page({params: {routeParams}}: PageParams) {
  const [originCodes, destinationCodes, departureDates] = routeParams || [];
  const { airports, fares } = await getData(originCodes, destinationCodes, departureDates);
  const airportsMap = new Map(airports.map(airport => [airport.code, airport]));

  return (
    <SearchLayout>
      <OneWayForm
        airports={airports}
        origins={airports.filter(airport => originCodes?.includes(airport.code))}
        destinations={airports.filter(airport => destinationCodes?.includes(airport.code))}
        departureDates={departureDates ? new Date(departureDates) : undefined}
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
