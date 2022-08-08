import { Airport, Fare, Operator, ServiceStatus } from '../clients';

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

export async function saveStatus (status: ServiceStatus) {
  const { _id, ...rest } = status;
  const { operator } = rest;
  return await runDbAction(async (db) => {
    const statusCollection = db.collection('status');
    const items = await statusCollection
      .find({ operator })
      .sort({ endAt: 1 })
      .toArray();

    const ids = items.slice(5).map(({ _id }: ServiceStatus) => _id);

    if (ids.length > 0) {
      await statusCollection.deleteMany({ _id: { $in: ids } });
    }

    return _id
      ? await statusCollection.replaceOne({ _id }, rest, { upsert: true })
      : await statusCollection.insertOne(rest);
  });
}
