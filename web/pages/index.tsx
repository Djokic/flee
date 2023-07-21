import React, { useState } from 'react';
import Head from 'next/head';

import styles from '@/styles/Home.module.css';

import AirportSelect from '@/components/AirportSelect/AirportSelect';
import { prisma } from '@/helpers/db';
import { Airport } from '@prisma/client';
import { AIRPORTS_TEST_DATA } from '@/components/AirportSelect/data';
import { useFares } from '@/hooks/useFares/useFares';

export const getStaticProps = async () => {
  const airports = await prisma.airport.findMany();
  // const airports: Airport[] = [];

  return {
    props: {
      airports,
    },
  };
};

type HomeProps = {
  airports: Airport[];
};

const date = new Date();

function Home({ airports }: HomeProps) {
  const [origins, setOrigins] = useState<Airport[]>([]);
  const [destinations, setDestinations] = useState<Airport[]>([]);

  const { fares, loading, error, handleSearch } = useFares({
    origins,
    destinations,
    dates: [date],
  });

  return (
    <>
      <Head>
        <title>One-way flights</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.Selector}>
          <AirportSelect
            label='From'
            placeholder='Select up to 3 origin airports'
            name="origins"
            airports={airports.length ? airports : AIRPORTS_TEST_DATA }
            selectedAirports={origins} 
            maxSelected={3}
            onChange={setOrigins}
          />
          <AirportSelect
            label='To'
            placeholder='Select up to 3 destination airports'
            name="origins"
            airports={airports.length ? airports : AIRPORTS_TEST_DATA }
            selectedAirports={destinations} 
            onChange={setDestinations}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </main>
    </>
  )
}

export default React.memo(Home);