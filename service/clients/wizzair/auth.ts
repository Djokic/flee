const Browser = require('zombie');

const https = require('https');
const setCookie = require('set-cookie-parser');

export async function getApiUrl (): Promise<string> {
  const browser = new Browser();
  await browser.visit('https://wizzair.com/static_fe/metadata.json');
  const apiUrl = JSON.parse(browser.resources[0].response.body).apiUrl;
  browser.destroy();
  return apiUrl;
}

export async function getNewSession (apiUrl: string) {
  const res = await new Promise((resolve) => {
    https.get(`${apiUrl}/userSession/new`, resolve);
  });
  const cookies = setCookie.parse(res, { decodeValues: true });
  const sessionId = cookies.find((cookie: any) => cookie.name === 'ASP.NET_SessionId')?.value;
  const verificationToken = cookies.find((cookie: any) => cookie.name === 'RequestVerificationToken')?.value;

  return {
    'content-type': 'application/json;charset=UTF-8',
    'x-requestverificationtoken': verificationToken,
    cookie: `ASP.NET_SessionId=${sessionId}; RequestVerificationToken=${verificationToken};`
  };
}

export async function logout (apiUrl: string, headers: Record<string, string>) {
  try {
    await fetch(`${apiUrl}/customer/logout`, {
      headers,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    });
  } catch (e) {
    console.log('Error logout WizzAir', e);
  }
}
