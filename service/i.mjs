import axios from 'axios';
import setCookie from 'set-cookie-parser';

const COOKIES = {};
const MAX_REQ_PER_SESSION = 3;

let apiReqCounter = 0;
const apiUrl = 'https://be.wizzair.com/12.13.1/Api';

async function login() {
  await Axios.get('https://wizzair.com');
  await Axios.get(`${apiUrl}/userSession/new`, {
    headers: generateHeaders()
  });
}

async function logout() {
  await Axios.request(`${apiUrl}/customer/logout`, {
    method: 'POST',
    headers: generateHeaders()
  })
}

const Axios = axios.create({ withCredentials: true, credentials: 'include', crossdomain: true });
Axios.interceptors.request.use(async (config) => {
  if (config.url.includes('/Api/search')) {
    // if (apiReqCounter >= MAX_REQ_PER_SESSION) {
    //   console.log('Logout-----')
    //   await logout();
    //   apiReqCounter = 0;
    // }
    //
    // if (apiReqCounter === 0) {
    //   console.log('Login-----')
    //   await login();
    // }
    //
    // apiReqCounter++;
    const headers = generateHeaders();

    return {
      ...config,
      headers,
    }
  }
  return config;
});
Axios.interceptors.response.use((response) => {
  const cookieStore = setCookie.parse(response.headers['set-cookie']);
  cookieStore.forEach((cookie) => {
    COOKIES[cookie.name] = cookie.value;
  });
  return response;
});

function generateHeaders() {
  return {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': 'https://wizzair.com',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Safari/605.1.15',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-gb',
    'Host': 'be.wizzair.com',
    'Origin': 'https://wizzair.com',
    'Connection': 'keep-alive',
    'Referer': 'https://wizzair.com/en-gb/flights/fare-finder',
    'Cookie': Object.entries(COOKIES).map(([key, value]) => `${key}=${value}`).join('; '),

    ... COOKIES['RequestVerificationToken']
      ? { 'X-RequestVerificationToken': COOKIES['RequestVerificationToken'] }
      : {}
  }
}

export const run = async () => {
  await login();
  for (let i = 0; i < 100; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      const response = await Axios.request(`${apiUrl}/search/timetable`, {
        method: 'POST',
        data: {
          "flightList": [
            {
              "departureStation": "INI",
              "arrivalStation": "VIE",
              "from": "2022-08-04",
              "to": "2022-08-10",
            },
            {
              "departureStation": "VIE",
              "arrivalStation": "INI",
              "from": "2022-08-04",
              "to": "2022-08-10",
            }
          ],
          "adultCount": 1,
          "childCount": 0,
          "infantCount": 0,
          "priceType": 'regular',
          // "wdc": true,
          // "dayInterval": 6
        }
      });
      console.log(i, ' -> ', Boolean(response.data.outboundFlights));
    } catch (error) {
      console.log('Error -> ', error.message);
    }
  }
};

run();
