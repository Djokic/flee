import Logos from "components/logos";
import React from 'react';
import {IoRepeatOutline} from "react-icons/io5";

import {Fare} from "../../service/clients";
import {getDifferenceInDays} from "../../service/helpers/date";
import styles from 'components/ReturnFare/ReturnFare.module.scss';

type ReturnFareProps = {
  data: Fare[];
}


export default function ReturnFare(props: ReturnFareProps) {
  const [outbound, inbound] = props.data;
  return (
    <div className={styles.ReturnFare}>
      <div className={styles.ReturnFare__content}>
        <div className={styles.ReturnFare__details}>
          <img src={Logos[outbound.operator].src} alt={outbound.operator}/>
          <div>
            <time>{new Date(outbound.date).toDateString()}</time>
            <span>{outbound.price.toFixed(2)} {outbound.currency}</span>
          </div>
        </div>

        <div>
          <span className={styles.ReturnFare__separator}>
            <IoRepeatOutline/>
          </span>
        </div>

        <div className={styles.ReturnFare__details}>
          <div>
            <time>{new Date(inbound.date).toDateString()}</time>
            <span>{inbound.price.toFixed(2)} {inbound.currency}</span>
          </div>
          <img src={Logos[inbound.operator].src} alt={inbound.operator}/>
        </div>
      </div>
      <footer>
        <span>{(outbound.price + inbound.price).toFixed(2)} {outbound.currency}</span>
        <span>{getDifferenceInDays(inbound.date, outbound.date)} days</span>
      </footer>

    </div>
  )
}