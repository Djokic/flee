import { Fare, Airport } from '@prisma/client';

import styles from './FareView.module.scss';

type FareViewProps = {
  fare: Fare;
  origin: Airport;
  destination: Airport;
}

export default function FareView({ fare, origin, destination }: FareViewProps) {
  return (
    <div className={styles.FareView}>
      {fare.origin} - {fare.destination}
    </div>
  )