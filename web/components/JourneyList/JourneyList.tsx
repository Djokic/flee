import {JourneyView} from "@/components/JourneyView/JourneyView";
import {useRef} from "react";
import {PiAirplaneTiltThin} from "react-icons/pi";
import {FareData} from "../../../common/fares";

import styles from './JourneyList.module.scss';

type JourneyList = {
  data: FareData[][];
  showNotFoundPlaceholder?: boolean;
}

export default function JourneyList({ data, showNotFoundPlaceholder }: JourneyList) {
  if (!showNotFoundPlaceholder && data.length === 0) {
    return null;
  }

  return (
    <div className={styles.JourneyList}>
      {data.length > 0 && data.map((journey, index) => (
        <JourneyView key={index} fares={journey} />
      ))}

      {data.length === 0 && (
        <div className={styles.JourneyList__Empty}>
          <PiAirplaneTiltThin/>
          No flights found
        </div>
      )}
    </div>
  )
}