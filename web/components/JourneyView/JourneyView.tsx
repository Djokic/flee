import FareView from "@/components/FareView/FareView";
import {Airport, Fare} from "@prisma/client";

import styles from './JourneyView.module.scss';

type JourneyViewProps = {
  airportsMap: Record<string, Airport>;
  fares: Fare | Fare[];
}

export function JourneyView({fares, airportsMap}: JourneyViewProps) {
  const isMultiFare = Array.isArray(fares);
  const totalPrice = isMultiFare ? fares.reduce((total, fare) => total + fare.price, 0) : fares.price;
  return (
    <div className={styles.JourneyView}>
      {isMultiFare ? fares.map((fare: Fare) => (
        <FareView
          key={fare.id}
          fare={fare}
          origin={airportsMap[fare.origin]}
          destination={airportsMap[fare.destination]}
        />
      )) : (
        <FareView
          fare={fares}
          origin={airportsMap[fares.origin]}
          destination={airportsMap[fares.destination]}
        />
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