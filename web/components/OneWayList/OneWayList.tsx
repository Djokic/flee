import React from "react";
import {Airport, Fare} from "@prisma/client";

import FareView from "@/components/FareView/FareView";

type OneWayListProps = {
  airportsMap: Map<string, Airport>;
  fares: Fare[];
}

export default function OneWayList({airportsMap, fares}: OneWayListProps) {
  return (
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
  )
}