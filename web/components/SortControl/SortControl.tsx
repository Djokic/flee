import {SortType} from "@/helpers/sort";
import {createRouteUrl} from "@/helpers/urlHelper";
import Link from "next/link";

import styles from './SortControl.module.scss';

type SortControlProps = {
  label: string;
  baseUrl: string;
  locations: string[][];
  dates: Date[][];
  currentSortBy: SortType;
}

export default function SortControl({label, baseUrl, locations, dates, currentSortBy}: SortControlProps) {
  return (
    <div className={styles.SortControl}>
      <header>{label}</header>

      <div>
        Sort

        <Link
          data-active={currentSortBy === SortType.DATE}
          tabIndex={0}
          href={createRouteUrl({
            baseUrl,
            locations,
            dates,
            sortBy: SortType.DATE
          })}>
          By Date
        </Link>

        <Link
          data-active={currentSortBy === SortType.PRICE}
          tabIndex={0}
          href={createRouteUrl({
            baseUrl,
            locations,
            dates,
            sortBy: SortType.PRICE
          })}
        >
          By Price
        </Link>
      </div>
    </div>
  );
}