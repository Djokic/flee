import OneWayFare from "components/OneWayFare/OneWayFare";
import ReturnFare from "components/ReturnFare/ReturnFare";
import React, {useState} from 'react';
import {Airport} from "service/clients";

import {DestinationData} from "../hooks/useFlightsData";
import styles from './DestinationView.module.scss';

type DestinationViewProps = {
  data: DestinationData;
  airportsMap: Record<string, Airport>
}


function DestinationView(props: DestinationViewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isDisabled = props.data.oneWayFares.length === 0 && props.data.returnFares.length === 0;

  return (
    <div className={styles.DestinationView} data-open={isOpen} data-disabled={isDisabled}>
      <header onClick={() => setIsOpen(!isOpen)}>
        <h4>{props.airportsMap[props.data.destination].name} ({props.data.destination})</h4>
        <span>{props.data.price} {props.data.currency}</span>
      </header>
      <div className={styles.DestinationView__content}>
        {props.data.oneWayFares.map((data) => <OneWayFare key={data.date} data={data}/>)}
        {props.data.returnFares.map((data) => <ReturnFare key={data[0].date + data[1].date} data={data}/>)}
      </div>
    </div>
  )
}

export default React.memo(DestinationView);