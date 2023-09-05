import FareView from "@/components/FareView/FareView";
import {FareData} from "../../../common/fares";
import {Airport} from "../../../common/airports";

import styles from './JourneyView.module.scss';

type JourneyViewProps = {
  fares: FareData[];
  passengersCount: number;
}

export function JourneyView({fares, passengersCount}: JourneyViewProps) {
  const isMultiFare = Array.isArray(fares) && fares.length > 1;
  const isMultiPassengers = passengersCount > 1;
  const totalPrice = isMultiFare ? fares.reduce((total, fare) => total + fare.price, 0) : fares[0]?.price;
  return (
    <div className={styles.JourneyView}>
      {isMultiFare ? fares.map((fare: FareData) => (
        <FareView key={fare.id} fare={fare}/>
      )) : (
        fares[0] && <FareView fare={fares[0]}/>
      )}
      {(isMultiFare || isMultiPassengers) && (
        <div className={styles.JourneyView__TotalPrice}>
          {isMultiPassengers && (
            <div>
              <span>Total for <strong>{passengersCount}</strong> people</span>
              <span>€{(totalPrice * passengersCount).toFixed(2)}</span>
            </div>
          )}
          <div>
            <span>Total {passengersCount > 1 ? 'per person' : ''}</span>
            <span>€{totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}