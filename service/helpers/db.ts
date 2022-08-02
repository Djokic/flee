import { Airport, Fare, Operator } from 'clients';

const { MongoClient, ServerApiVersion, Db } = require('mongodb');

if (!process.env.MONGO_URI) {
  throw new Error('Missing MongoDB URI in env');
}

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});

async function runDbAction (action: (db: typeof Db) => Promise<any>) {
  let result;
  try {
    await client.connect();
    const db = client.db('fle');
    result = await action(db);
  } catch (e) {
    console.log('MongoError ->', e);
  } finally {
    await client.close();
  }
  return result;
}

export async function saveAirports (airports: Airport[]) {
  return await runDbAction(async (db) => {
    const airportsCollection = db.collection('airports');
    if (await airportsCollection.countDocuments() > 0) {
      await airportsCollection.drop();
    }
    await airportsCollection.insertMany(airports);
  });
}

export async function loadAirports (): Promise<Airport[]> {
  return await runDbAction(async (db) => {
    const airportsCollection = db.collection('airports');
    const cursor = airportsCollection.find();
    const airports: Airport[] = await cursor.toArray();
    return airports;
  });
}

export async function saveFares (fares: Fare[], operator: Operator) {
  return await runDbAction(async (db) => {
    const airportsCollection = db.collection('fares');
    await airportsCollection.deleteMany({ operator });
    await airportsCollection.insertMany(fares);
  });
}
