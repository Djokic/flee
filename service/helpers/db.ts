import { Airport, Fare } from 'clients';

const { MongoClient, ServerApiVersion, Db } = require('mongodb');

if (!process.env.MONGO_URI) {
  throw new Error('Missing MongoDB URI in env');
}

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});

async function runDbAction (action: (db: typeof Db) => Promise<void>) {
  try {
    await client.connect();
    const db = client.db('fle');
    await action(db);
  } catch (e) {
    console.log('MongoError ->', e);
  } finally {
    await client.close();
  }
}

export async function saveAirports (airports: Airport[]) {
  await runDbAction(async (db) => {
    const airportsCollection = db.collection('airports');
    if (await airportsCollection.countDocuments() > 0) {
      await airportsCollection.drop();
    }
    await airportsCollection.insertMany(airports);
  });
}

export async function saveFares (fares: Fare[]) {
  await runDbAction(async (db) => {
    const airportsCollection = db.collection('fares');
    if (await airportsCollection.countDocuments() > 0) {
      await airportsCollection.drop();
    }
    await airportsCollection.insertMany(fares);
  });
}
