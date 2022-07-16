var https = require('https');
var setCookie = require('set-cookie-parser');

export async function getApiUrl() {
  return "https://be.wizzair.com/12.12.0/Api";
  // try {
  //   let headers = new Headers({
  //     "Accept"       : "application/json",
  //     "Content-Type" : "application/json",
  //     "User-Agent"   : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
  //   })
  //   const res = await fetch('https://wizzair.com/static_fe/metadata.json', { headers, credentials: "include" });
  //   const data = await res.json();
  //   return data.apiUrl;
  // } catch (e) {
  //   console.log('Error getting apiUrl', e)
  // }
}

export async function getNewSession(apiUrl: string) {
  const res = await new Promise((resolve) => {
    https.get(`${apiUrl}/userSession/new`, resolve)
  });
  const cookies = setCookie.parse(res, { decodeValues: true });
  const sessionId = cookies.find((cookie: any) => cookie.name === 'ASP.NET_SessionId')?.value;
  const verificationToken = cookies.find((cookie: any) => cookie.name === 'RequestVerificationToken')?.value;

  return {
    "content-type": "application/json;charset=UTF-8",
    "x-requestverificationtoken": verificationToken,
    "cookie": `ASP.NET_SessionId=${sessionId}; RequestVerificationToken=${verificationToken};`,
  }
}

export async function logout(apiUrl: string, headers: Record<string, string>) {
  try {
    await fetch(`${apiUrl}/customer/logout`, {
      headers,
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    });
  } catch (e) {
    console.log('Error logout WizzAir', e)
  }

}