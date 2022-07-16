// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getAirports, getFlightsData, getRoutesForAirport} from "service/clients/ryanair";
import {getFares, GetFlightsParams} from "service/clients/ryanair/flights";
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const routes = await getRoutesForAirport(req.query.origin as string);
  const destinations = routes.map((route) => route.arrivalAirport.code);

  const origin = req.query.origin as string;
  const places: { origin: string, destination: string }[] = [];
  destinations.forEach((destination) => {
    places.push({
      origin,
      destination
    });
    places.push({
      origin: destination,
      destination: origin
    });
  })

  const data = await Promise.all(places.map(async (placeGroup) =>({
    ...placeGroup,
    fares: await getFares({
      ...placeGroup,
      fromDate: req.query.fromDate as string,
      toDate: req.query.toDate as string
    })
  })));

  res.status(200).json({ data })
}
