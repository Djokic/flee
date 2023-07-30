import { PiBuildingsThin, PiAirplaneTiltThin } from 'react-icons/pi';

import styles from './StatusView.module.scss';

type StatusViewProps = {
  airportCount: number;
  fareCount: number;
}

export default function StatusView({airportCount, fareCount}: StatusViewProps) {
  return (
    <small className={styles.StatusView}>
      <PiBuildingsThin/>{airportCount} airports and <PiAirplaneTiltThin/>{fareCount} flights
    </small>
  )
}