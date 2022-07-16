import DestinationView from "components/DestinationView/DestinationView";
import React from 'react';
import {Airport} from "service/clients";

import {OriginData} from "../hooks/useFlightsData";
import styles from 'components/OriginView/OriginView.module.scss';

type OriginViewProps = {
  data: OriginData;
  airportsMap: Record<string, Airport>
}


export default function OriginView(props: OriginViewProps) {
  return (
    <div className={styles.OriginView}>
      <h2>{props.airportsMap[props.data.origin].name} ({props.data.origin})</h2>
      <span>✈️</span>
      {props.data.destinations.map((data) => (
        <DestinationView
          key={data.destination}
          data={data}
          airportsMap={props.airportsMap}
        />
      ))}
    </div>
  )
}