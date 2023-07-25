import {prisma} from "./prisma";

export async function getAllAirports() {
  return await prisma.airport.findMany();
}