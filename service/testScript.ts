import { getApiUrl } from 'clients/wizzair/auth';
import { getFares } from 'clients/wizzair/fares';

const getRate = async (source: string, target: string) => {
  // const res = await fetch(
  //   encodeURI(`https://www.google.com/search?q=${source.toUpperCase()}+to+${target.toUpperCase()}&hl=en`)
  // );
  const res = await fetch('https://www.google.com/search?q=rsd+to+eur&ei=6FzTYsKWOYqYsAfvypPgBA&ved=0ahUKEwjCqsWj2v74AhUKDOwKHW_lBEwQ4dUDCA4&uact=5&oq=rsd+to+eur&gs_lcp=Cgdnd3Mtd2l6EAMyCggAEJECEEYQggIyBQgAEJECMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBAgAEEMyBQgAEIAEMgUIABCABDoICC4Q1AIQkQI6BwgAEIAEEAo6CwguEIAEEMcBEK8BOgwIABCABBAKEEYQggI6CggAEOoCELQCEEM6FAgAEOoCELQCEIoDELcDENQDEOUCOg4ILhCABBDHARDRAxDUAjoLCC4QgAQQxwEQ0QM6CAguEIAEENQCOgUILhCABEoECEEYAEoECEYYAFAAWMZPYJH_AmgKcAF4AYABygKIAaIQkgEINC4xMS4wLjGYAQCgAQGwAQrAAQE&sclient=gws-wiz', {
    headers: {
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-language': 'en-US,en;q=0.9',
      'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
      'sec-ch-ua-arch': '"x86"',
      'sec-ch-ua-bitness': '"64"',
      'sec-ch-ua-full-version': '"103.0.5060.114"',
      'sec-ch-ua-full-version-list': '".Not/A)Brand";v="99.0.0.0", "Google Chrome";v="103.0.5060.114", "Chromium";v="103.0.5060.114"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-model': '""',
      'sec-ch-ua-platform': '"macOS"',
      'sec-ch-ua-platform-version': '"11.5.2"',
      'sec-ch-ua-wow64': '?0',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1'
    },
    referrer: 'https://www.google.com/',
    referrerPolicy: 'origin',
    body: null,
    method: 'GET',
    mode: 'cors',
    credentials: 'include'
  }); ;
  const text = await res.text();
  const pattern = /data-exchange-rate=".*"/gi;
  console.log('TT', text);
  const matchArray = text.match(pattern) || [];
  const [matchRes] = matchArray;
  return parseFloat(matchRes?.replace('"', '')?.split('=')?.[1] || 'NaN');
};

async function run () {
  const apiUrl = await getApiUrl();
  const data = await getFares(apiUrl, {
    origin: 'INI',
    destination: 'DTM',
    startDate: '2022-08-18',
    lookupDays: 30
  });
  console.log('D', data);
}

run();
