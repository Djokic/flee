import React from 'react';

import {Fare} from "@common/types";

import styles from './OneWayFare.module.scss';

type OneWayFareProps = {
  data: Fare;
}


export default function OneWayFare(props: OneWayFareProps) {
  return (
    <div className={styles.OneWayFare}>
      <time>{new Date(props.data.date).toDateString()}</time>
      <span>{props.data.price.toFixed(2)} {props.data.currency}</span>
    </div>
  )
}