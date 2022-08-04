import {useAirports} from "components/hooks/useAirports";
import OriginsList from "components/OriginsList/OriginsList";
import React from 'react';

import {useFlights } from "components/hooks/useFlights";
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { airportsMap, loading } = useAirports();
  const { data } = useFlights({
    origins: ['INI', 'BEG'],
    oneWay: false,
    maxPrice: 100,
    daysBetweenFrom: 2,
    daysBetweenTo: 14
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>FLE</title>
        <meta name="description" content="Find cheap flights" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!loading && (
          <OriginsList data={data} airportsMap={airportsMap}/>
        )}
      </main>
    </div>
  )
}

export default React.memo(Home);
