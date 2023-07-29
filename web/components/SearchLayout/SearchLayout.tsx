'use client';

import {Routes} from "@/app/routes";
import SortControl from "@/components/SortControl/SortControl";
import {TabsList} from "@/components/TabsList/TabsList";
import {SortType} from "@/helpers/sort";
import {createRouteUrl} from "@/helpers/urlHelper";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from 'react';
import clsx from 'clsx';

import styles from './SearchLayout.module.scss';

type SearchLayoutProps = {
  children: [React.ReactNode, React.ReactNode];
  className?: string;
  faresCount: number;
  baseUrl: string;
  locations: string[][];
  dates: Date[][];
  sortType: SortType;
}

export default function SearchLayout(props: SearchLayoutProps) {
  const {
    children,
    baseUrl,
    faresCount,
    locations,
    dates,
    sortType = SortType.DATE,
    className
  } = props;
  const pathname = usePathname();
  const classNames = clsx(styles.SearchLayout, className);

  return (
    <div className={classNames}>
      <div className={styles.SearchLayout__Content}>
        <div className={styles.SearchLayout__Form}>
          <TabsList>
            <Link
              href={createRouteUrl({
                baseUrl: Routes.RETURN,
                locations: locations.slice(0, 2),
                dates: dates.slice(0, 2),
                sortType
              })}
              aria-selected={pathname?.includes(Routes.RETURN)}
            >
              Return Flight
            </Link>
            <Link
              href={createRouteUrl({
                baseUrl: Routes.ONE_WAY,
                locations: locations.slice(0, 2),
                dates: dates.slice(0, 1),
                sortType
              })}
              aria-selected={pathname?.includes(Routes.ONE_WAY)}
            >
              One Way
            </Link>
            <Link
              href={createRouteUrl({
                baseUrl: Routes.MULTI_CITY,
                locations: locations,
                dates: dates,
                sortType
              })}
              aria-selected={pathname?.includes(Routes.MULTI_CITY)}
            >
              Multi City
            </Link>
          </TabsList>

          {children[0]}
        </div>

        <div className={styles.SearchLayout__Results} data-results>
          <SortControl
            faresCount={faresCount}
            baseUrl={baseUrl}
            locations={locations}
            dates={dates}
            sortType={sortType}
          />

          {children[1]}
        </div>
      </div>
    </div>
  );
}