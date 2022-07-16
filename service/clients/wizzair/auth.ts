var https = require('https');
var setCookie = require('set-cookie-parser');

export async function getNewSession() {
  const res = await new Promise((resolve) => {
    https.get(' https://be.wizzair.com/12.11.2/Api/userSession/new', resolve)
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

export async function logout(headers: Record<string, string>) {
  try {
    await fetch("https://be.wizzair.com/12.11.2/Api/customer/logout", {
      headers,
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    });
  } catch (e) {
    console.log('Error logout WizzAir', e)
  }

}