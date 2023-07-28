import neo4j from "neo4j-driver";

export function getDbSession() {
  const driver = neo4j.driver(
    'neo4j+s://c3e206d8.databases.neo4j.io',
    neo4j.auth.basic('neo4j', 'NN2mToVhefiC0HqQsturGnHKOwvhy-yMz-VytXPkXKw')
  );
  return driver.session();
}