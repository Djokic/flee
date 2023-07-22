
import { Fare, Prisma, Operator } from "@prisma/client";
import { format } from 'date-fns';

function createRyanairUrl(origin: string, destination: string, date: string): string {
  const baseUrl = 'https://www.ryanair.com/gb/en/trip/flights/select';
  const params = {
    adults: 1,
    teens: 0,
    children: 0,
    infants: 0,
    dateOut: date,
    isConnectedFlight: false,
    isReturn: false,
    discount: 0,
    promoCode: '',
    originIata: origin,
    destinationIata: destination,
    tpAdults: 1,
    tpTeens: 0,
    tpChildren: 0,
    tpInfants: 0,
    tpStartDate: date,
    tpEndDate: '',
    tpDiscount: 0,
    tpPromoCode: '',
    tpOriginIata: origin,
    tpDestinationIata: destination
  };

  const queryParams = new URLSearchParams(params as any).toString();
  
  return `${baseUrl}?${queryParams}`;
}


function createWizzairUrl(origin: string, destination: string, date: string): string {
  const baseUrl = 'https://wizzair.com/en-gb/flights/';
  const params = {
    departureDate: date,
    returnDate: '',
    originIata: origin,
    destinationIata: destination,
    adults: 1,
    children: 0,
    infants: 0,
    isRescueFare: false,
    wdc: true
  };

  const queryParams = new URLSearchParams(params as any).toString();
  
  return `${baseUrl}${origin}/${destination}/${date}?${queryParams}`;
}


export function getBuyLink(fare: Prisma.FareCreateInput): string {
  const date = format(new Date(fare.date), 'yyyy-MM-dd');
  switch (fare.operator) {
    case Operator.RYANAIR:
      return createRyanairUrl(fare.origin, fare.destination, date);
    case Operator.WIZZAIR:
      return createWizzairUrl(fare.origin, fare.destination, date);
    default:
      throw new Error(`Unknown operator: ${fare.operator}`);
  }
}