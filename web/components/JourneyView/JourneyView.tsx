import FareView from "@/components/FareView/FareView";
import {FareData} from "../../../common/fares";
import {Airport} from "../../../common/airports";

import styles from './JourneyView.module.scss';

type JourneyViewProps = {
  fares: FareData[];
}

export function JourneyView({fares}: JourneyViewProps) {
  const isMultiFare = Array.isArray(fares) && fares.length > 1;
  const totalPrice = isMultiFare ? fares.reduce((total, fare) => total + fare.price, 0) : fares[0]?.price;
  return (
    <div className={styles.JourneyView}>
      {isMultiFare ? fares.map((fare: FareData) => (
        <FareView key={fare.id} fare={fare}/>
      )) : (
        fares[0] && <FareView fare={fares[0]}/>
      )}
      {isMultiFare && (
        <div className={styles.JourneyView__TotalPrice}>
          <span>Total</span>
          <span>€{totalPrice.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
}