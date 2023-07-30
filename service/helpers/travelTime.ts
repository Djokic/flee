import { Airport } from '@common/airports';

/**
 * Calculate the estimated flight time between two airports in minutes (rounded to the nearest 5 minutes)
 * @param airport1
 * @param airport2
 * @returns
 */
function getEstimatedFlightTimeInMins (airport1: Airport, airport2: Airport) {
  const R = 6371; // Radius of the earth in km
  const lat1 = airport1.latitude * (Math.PI / 180);
  const lat2 = airport2.latitude * (Math.PI / 180);
  const latDiff = (airport2.latitude - airport1.latitude) * (Math.PI / 180);
  const lonDiff = (airport2.longitude - airport1.longitude) * (Math.PI / 180);

  const a = Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
    Math.cos(lat1) * Math.cos(lat2) *
    Math.sin(lonDiff / 2) * Math.sin(lonDiff / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in km

  const speed = 800; // Average speed of a commercial airliner in km/h
  const flightTime = distance / speed;
  const takeoffAndLanding = 25 / 60; // Take-off and landing time in hours (25 minutes)

  // Convert total flight time in hours to minutes
  const totalFlightTimeInMinutes = (flightTime + takeoffAndLanding) * 60;

  // Round to nearest 5 minutes
  return Math.ceil(totalFlightTimeInMinutes / 5) * 5;
}

export class TravelTimeStore {
  private readonly airportsMap: Record<string, Airport> = {};
  private timesCache: Record<string, number> = {};

  constructor (airports: Airport[]) {
    this.airportsMap = airports.reduce((acc: Record<string, Airport>, airport: Airport) => {
      acc[airport.code] = airport;
      return acc;
    }, {});
  }

  getTravelTimeInMins = (origin: string, destination: string) => {
    if (!this.timesCache[`${origin}-${destination}`]) {
      const airport1 = this.airportsMap[origin];
      const airport2 = this.airportsMap[destination];
      this.timesCache[`${origin}-${destination}`] = getEstimatedFlightTimeInMins(airport1, airport2);
    }
    return this.timesCache[`${origin}-${destination}`];
  };
}
