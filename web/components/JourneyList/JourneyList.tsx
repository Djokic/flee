import {JourneyView} from "@/components/JourneyView/JourneyView";
import {useRef} from "react";
import {FareData} from "../../../common/fares";

import styles from './JourneyList.module.scss';

type JourneyList = {
  data: FareData[][]
}

export default function JourneyList({ data }: JourneyList) {
  return (
    <div className={styles.JourneyList}>
      {data.map((journey, index) => (
        <JourneyView key={index} fares={journey} />
      ))}
    </div>
  )
}