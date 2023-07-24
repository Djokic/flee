import { format } from 'date-fns';
import { Fare, Airport } from '@prisma/client';
import { BiSolidPlane } from 'react-icons/bi';

import styles from './FareView.module.scss';

import { getFlightTime } from '@/helpers/flightTime';
import {  getBuyLink } from '@/helpers/buyLinks';
import { getOperatorIcon } from '@/helpers/operatorIcons';

type FareViewProps = {
  fare: Fare;
  origin: Airport;
  destination: Airport;
}

export default function FareView({ fare, origin, destination }: FareViewProps) {
  const date = new Date(fare.date);
  return (
    <div className={styles.FareView}>
      <div className={styles.FareView__Content}>
        <div className={styles.FareView__Row}>
          <h4>{origin.name}</h4>
          <h4>{destination.name}</h4>
        </div>
        <div className={styles.FareView__Row}>
          <time>{format(date, 'HH:mm')}</time>
          <time>{format(date, 'd. LLLL')} </time>
        </div>
        <div className={styles.FareView__Row}>
          <span className={styles.FareView__Code}>{origin.code}</span>
          <span className={styles.FareView__FlightTime}>
            <BiSolidPlane/>
            <span>{getFlightTime(origin, destination)}</span>
          </span>
          <span className={styles.FareView__Code}>{destination.code}</span>
        </div>
      </div>

      <div className={styles.FareView__Price}>
        €{fare.price.toFixed(2)} 

          <img src={getOperatorIcon(fare.operator)} alt={fare.operator} />

          <a href={getBuyLink(fare)} target="_blank" rel="noreferrer">
            Book
          </a>
      </div>
    </div>
  )
}