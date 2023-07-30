import {Session} from "neo4j-driver";

type GetStatusInput = {
  session: Session;
}

type GetStatusOutput = {
  airportCount: number;
  fareCount: number;
}

export async function getStatus({session}: GetStatusInput) {
  const query = `
        MATCH (a:Airport)
        WITH count(a) AS airportCount
        MATCH ()-[f:FARE]->()
        RETURN airportCount, count(f) AS fareCount
    `;

  const result = await session.run(query);
  const singleRecord = result.records[0];
  const airportCount = singleRecord.get('airportCount').low;
  const fareCount = singleRecord.get('fareCount').low;

  return {airportCount, fareCount };
}