import {useStatus} from "components/hooks/useStatus";
import StatusView from "components/StatusView/StatusView";

import type {NextPage} from 'next'
import Head from 'next/head'
import React from 'react';
import {Operator} from "@common/types";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const {status, loading} = useStatus();

  return (
    <div className={styles.container}>
      <Head>
        <title>FLE | Status</title>
        <meta name="description" content="FLE | Status page"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={`${styles.main} flex-row flex-align-start phi-m`}>
        {Object.keys(status).map((operator) => (
          <StatusView
            key={operator}
            operator={operator as Operator}
            data={status[operator]}
          />
        ))}
      </main>
    </div>
  )
}

export default React.memo(Home);
