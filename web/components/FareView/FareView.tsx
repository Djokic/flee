import { format } from 'date-fns';
import Image from "next/image";
import { BiSolidPlane } from 'react-icons/bi';
import {FareData} from "../../../common/fares";

import styles from './FareView.module.scss';

import {  getBuyLink } from '@/helpers/buyLinks';
import { getOperatorIcon } from '@/helpers/operatorIcons';

type FareViewProps = {
  fare: FareData;
}

function formatFlightTime(flightTimeInMins: number) {
  const hours = Math.floor(flightTimeInMins / 60);
  const minutes = flightTimeInMins % 60;

  if (hours === 0) return `${minutes}m`;
  if (minutes === 0) return `${hours}h`;

  return `${hours}h ${minutes}m`;
}

export default function FareView({ fare }: FareViewProps) {
  const date = new Date(fare.date);

  return (
    <div className={styles.FareView}>
      <div className={styles.FareView__Content}>
        <div className={styles.FareView__Row}>
          <h4>{fare.originName}</h4>
          <h4>{fare.destinationName}</h4>
        </div>
        <div className={styles.FareView__Row}>
          <time>{format(date, 'HH:mm')}</time>
          <time>{format(date, 'd. LLLL')} </time>
        </div>
        <div className={styles.FareView__Row}>
          <span className={styles.FareView__Code}>{fare.origin}</span>
          <span className={styles.FareView__FlightTime}>
            <BiSolidPlane/>
            <span>{formatFlightTime(fare.duration ?? 0)}</span>
          </span>
          <span className={styles.FareView__Code}>{fare.destination}</span>
        </div>
      </div>

      <div className={styles.FareView__Price}>
        €{fare.price.toFixed(2)} 

          <img src={getOperatorIcon(fare.operator)} alt={fare.operator}/>

          <a href={getBuyLink(fare)} target="_blank" rel="noreferrer">
            Book
          </a>
      </div>
    </div>
  )
}