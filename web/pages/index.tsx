import React, { useState } from 'react';
import Head from 'next/head';

import styles from '@/styles/Home.module.scss';

import AirportPicker from '@/components/AirportSelect/AirportPicker';
import { prisma } from '@/helpers/db';
import { Airport } from '@prisma/client';
import DatePicker, { DatePickerMode } from '@/components/DatePicker/DatePicker';
import { FaresSortBy, useOneWayFares } from '@/hooks/useOneWayFares/useOneWayFares';
import FareView from '@/components/FareView/FareView';
import RadioGroup from '@/components/RadioGroup/RadioGroup';

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
    fares,
    airportsMap,
    origins,
    potentialOrigins,
    destinations,
    potentialDestinations,
    departure,
    sortBy,
    handleOriginsChange,
    handleDestinationsChange,
    handleDepartureChange,
    handleSearch,
    handleSort
  } = useOneWayFares({ airports });

  return (
    <>
      <Head>
        <title>One-way flights</title>
      </Head>
      <div className={styles.MainContent}>
      <aside className={styles.Search}>
        <div className={styles.SearchForm}>
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
      <div className={styles.Results}>
        <header>
          <label>Sort by</label>
          <RadioGroup
            value={sortBy}
            items={[
              { label: FaresSortBy.DATE, value: FaresSortBy.DATE },
              { label: FaresSortBy.PRICE, value: FaresSortBy.PRICE }
            ]}
            onChange={handleSort} 
          />
        </header>
        
        {fares.map((fare) => (
          <FareView key={fare.id}
            fare={fare}
            origin={airportsMap[fare.origin]}
            destination={airportsMap[fare.destination]}
          />
        ))}
      </div> 
      </div>
    </>
  )
}

export default React.memo(Home);