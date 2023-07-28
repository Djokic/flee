import neo4j from 'neo4j-driver';

if (!process.env.DB_URL || !process.env.DB_USER || !process.env.DB_PASSWORD) {
  throw new Error('Missing DB_URL, DB_USER or DB_PASSWORD environment variable');
}

export const dbDriver = neo4j.driver(
  process.env.DB_URL,
  neo4j.auth.basic(process.env.DB_USER, process.env.DB_PASSWORD)
);
