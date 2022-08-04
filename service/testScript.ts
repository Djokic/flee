import { getArguments } from './helpers/arguments';

// const client = new TransaviaClient({ lookupDays: 30 });

// const getTransavia = async () => {
//   const res = await fetch('https://www.transavia.com/en-EU/api/airports/?selfConnect=true', {
//     headers: {
//       accept: '*/*',
//       'accept-language': 'en-US,en;q=0.9',
//       'request-id': '|287e5489c1c044e0b33a00662fbf474c.ce7b9023dc8a4158',
//       'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
//       'sec-ch-ua-mobile': '?0',
//       'sec-ch-ua-platform': '"macOS"',
//       'sec-fetch-dest': 'empty',
//       'sec-fetch-mode': 'cors',
//       'sec-fetch-site': 'same-origin',
//       traceparent: '00-287e5489c1c044e0b33a00662fbf474c-ce7b9023dc8a4158-01'
//     },
//     referrer: 'https://www.transavia.com/en-EU/book-a-flight/flights/search/',
//     referrerPolicy: 'strict-origin-when-cross-origin',
//     body: null,
//     method: 'GET',
//     mode: 'cors',
//     credentials: 'include'
//   });
//
//   return await res.text();
// };

async function run () {
  // const {
  //   operator,
  //   allAirports
  // } = getArguments();
  console.log(getArguments());
}

run();
