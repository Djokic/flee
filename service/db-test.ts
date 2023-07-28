import { driver } from './db/driver';
import { getFares } from '@common/fares';

async function run () {
  const session = driver.session();
  const fares = await getFares({
    session,
    origins: ['INI'],
    destinations: ['BEG'],
    limit: 10,
    sortType: 'price'
  });

  console.log('FF', fares[0]);

  await session.close();
}

run();
