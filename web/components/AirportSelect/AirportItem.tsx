import React from "react";
import { Command } from "cmdk"
import {useCallback} from "react";
import {Airport} from "../../../common/airports";

type AirportItemProps = {
  airport: Airport;
  onClick: (airport: Airport) => void;
}

function AirportItem({ airport, onClick }: AirportItemProps) {
  const handleClick = useCallback(() => {
    onClick(airport);
  }, [airport, onClick]);

  return (
    <Command.Item
      key={airport.id}
      value={`${airport.name}_${airport.code}_${airport.countryName}`}
      onSelect={handleClick}
    >
      {airport.name}
      <small>
        {airport.code}
      </small>
    </Command.Item>
  )
}

export default React.memo(AirportItem);