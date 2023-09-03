import {SortType} from "@/helpers/sort";
import {createRouteUrl} from "@/helpers/urlHelper";
import Link from "next/link";

import styles from './SortControl.module.scss';

type SortControlProps = {
  faresCount: number;
  baseUrl: string;
  locations: string[][];
  dates: Date[][];
  sortType: SortType;
  passengersCount: number;
}

export default function SortControl({faresCount, baseUrl, locations, dates, sortType, passengersCount }: SortControlProps) {
  if (!faresCount) {
    return null;
  }

  return (
    <div className={styles.SortControl}>
      <header>
        {
          faresCount % 100 === 0
            ? `Showing ${faresCount} results`
            : `${faresCount} results found`
        }
      </header>

      <div>
        Sort

        <Link
          data-active={sortType === SortType.DATE}
          tabIndex={0}
          href={createRouteUrl({
            baseUrl,
            locations,
            dates,
            sortType: SortType.DATE,
            count: passengersCount
          })}>
          By Date
        </Link>

        <Link
          data-active={sortType === SortType.PRICE}
          tabIndex={0}
          href={createRouteUrl({
            baseUrl,
            locations,
            dates,
            sortType: SortType.PRICE,
            count: passengersCount
          })}
        >
          By Price
        </Link>
      </div>
    </div>
  );
}