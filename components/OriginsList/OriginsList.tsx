import OriginView from "components/OriginView/OriginView";
import React from 'react';
import {Airport} from "service/clients";

import {OriginData} from "../hooks/useFlightsData";

import styles from './OriginsList.module.scss';

type OriginsListProps = {
  data: OriginData[];
  airportsMap: Record<string, Airport>
}


export default function OriginsList(props: OriginsListProps) {
  return (
    <div className={styles.OriginsList}>
      {props.data.map((data) => (
        <OriginView
          key={data.origin}
          airportsMap={props.airportsMap}
          data={data}
        />
      ))}
    </div>
  )
}