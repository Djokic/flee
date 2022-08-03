import OneWayFare from "components/OneWayFare/OneWayFare";
import ReturnFare from "components/ReturnFare/ReturnFare";
import React, {useState} from 'react';
import {Airport} from "service/clients";

import {DestinationData} from "../hooks/useFlights";
import styles from './DestinationView.module.scss';

type DestinationViewProps = {
  data: DestinationData;
  airportsMap: Record<string, Airport>
}


function DestinationView(props: DestinationViewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isDisabled = props.data.oneWayFares.length === 0 && props.data.twoWayFares.length === 0;

  return (
    <div className={styles.DestinationView} data-open={isOpen} data-disabled={isDisabled}>
      <header onClick={() => setIsOpen(!isOpen)}>
        <h4>{props.airportsMap[props.data.destination].name} <span>{props.data.destination}</span></h4>
        <div className={styles.DestinationView__planeAnimation}/>
        {props.data.price && (
          <span>{props.data.price.toFixed(2)} <span>{props.data.currency}</span></span>
        )}
      </header>
      <div className={styles.DestinationView__content}>
        {props.data.oneWayFares.map((data) => <OneWayFare key={data.date} data={data}/>)}
        {props.data.twoWayFares.map((data) => <ReturnFare key={data[0].date + data[1].date} data={data}/>)}
      </div>
    </div>
  )
}

export default React.memo(DestinationView);