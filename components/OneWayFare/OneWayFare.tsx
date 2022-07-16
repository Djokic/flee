import React from 'react';

import {Fare} from "../../service/clients";
import styles from './OneWayFare.module.scss';

type OneWayFareProps = {
  data: Fare;
}


export default function OneWayFare(props: OneWayFareProps) {
  return (
    <div className={styles.OneWayFare}>
      <time>{new Date(props.data.date).toDateString()}</time>
      <span>{props.data.price} {props.data.currency}</span>
    </div>
  )
}