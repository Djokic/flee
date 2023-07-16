const mongoApiUrl = process.env.MONGO_API_URL || '';
const mongoApiKey = process.env.MONGO_API_KEY || '';

export async function getWholeCollectionFromDb(collection: string) {
  const action = `${mongoApiUrl}/find`
  const res = await fetch(action, {
    method: 'POST',
    headers: {
      'api-key': mongoApiKey
    },
    body: JSON.stringify({
      dataSource: 'Cluster0',
      database: 'fle',
      collection
    })
  });

  const { documents } = await res.json();
  return documents;
}