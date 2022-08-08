import Logos from "components/logos";
import React from 'react';
import {Operator, ServiceStatus, ServiceStatusCode } from "@common/types";

import styles from './StatusView.module.scss';

type StatusViewProps = {
  operator: Operator;
  data: ServiceStatus[]
}

function Semaphore({code}: { code: ServiceStatusCode }) {
  return (
    <div className={styles.Semaphore} data-kind={code}/>
  )
}

export default function StatusView(props: React.PropsWithChildren<StatusViewProps>) {
  return (
    <div className={styles.StatusView}>
      <header>
        <div>
          <img src={Logos[props.operator].src} alt={props.operator}/>
          <h4>{props.operator}</h4>
        </div>
        <Semaphore code={props.data[0]?.code}/>
      </header>
      <ul>
        {props.data.map((data) => (
          <li key={data.startAt}>
            <div>
              <div>
                <time className="mr-s">{new Date(data.startAt).toDateString()}</time>
                <time>{new Date(data.startAt).toLocaleTimeString()}</time>
              </div>
              <Semaphore code={data.code}/>
            </div>
            {data.endAt && data.startAt && (
              <div className={styles.details}>
                Duration: {((new Date(data.endAt).getTime()) - (new Date(data.startAt).getTime())) / 1000} seconds
              </div>
            )}
            {data.details && <div className={styles.details}>Details: {data.details}</div>}
            {data.error && <div className={styles.error}>Error: {data.error}</div>}
          </li>
        ))}
      </ul>
    </div>
  )
}