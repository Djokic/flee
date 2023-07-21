import React, { useState } from 'react';
import Head from 'next/head';

import styles from '@/styles/Home.module.scss';

import AirportPicker from '@/components/AirportSelect/AirportPicker';
import { prisma } from '@/helpers/db';
import { Airport } from '@prisma/client';
import { AIRPORTS_TEST_DATA } from '@/components/AirportSelect/data';
import { useFares } from '@/hooks/useFares/useFares';
import DatePicker, { DatePickerMode } from '@/components/DatePicker/DatePicker';
import { useOneWayFares } from '@/hooks/useOneWayFares/useOneWayFares';

export const getStaticProps = async () => {
  const airports = await prisma.airport.findMany();

  return {
    props: {
      airports,
    },
  };
};

type HomeProps = {
  airports: Airport[];
};


function Home({ airports }: HomeProps) {
  const {
    origins,
    potentialOrigins,
    destinations,
    potentialDestinations,
    departure,
    handleOriginsChange,
    handleDestinationsChange,
    handleDepartureChange,
    handleSearch,
  } = useOneWayFares({ airports });

  return (
    <>
      <Head>
        <title>One-way flights</title>
      </Head>
      <aside className={styles.aside}>
        <div className={styles.Selector}>
          <AirportPicker
            label='From'
            placeholder='Select up to 3 origin airports'
            name="origins"
            airports={potentialOrigins}
            selectedAirports={origins} 
            maxSelected={3}
            onChange={handleOriginsChange}
          />
          <hr/>
          <AirportPicker
            label='To'
            placeholder='Select up to 3 destination airports'
            name="origins"
            airports={potentialDestinations}
            selectedAirports={destinations} 
            onChange={handleDestinationsChange}
          />
          <hr />
          <DatePicker
            label='Departure date'
            placeholder='Select departure date'
            name="departureDate"
            mode={DatePickerMode.Single}
            selected={departure}
            onSelect={handleDepartureChange}
          />
        </div>
        <button onClick={handleSearch}>Search</button>
      </aside>
    </>
  )
}

export default React.memo(Home);