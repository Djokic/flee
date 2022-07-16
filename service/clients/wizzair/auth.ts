import {RequestListener} from "http";

var https = require('https');
var setCookie = require('set-cookie-parser');

export async function getApiUrl(): Promise<string> {
  // console.log('Op');
  // const res:any = await new Promise((resolve) => https.get(`https://wizzair.com`, (res) =>resolve(res.headers)));
  // console.log('hh', res.headers);
  const res = await fetch('https://wizzair.com/');
  const data = await res.headers;
  console.log(data);
  // const backendUrl =  data
  //   .split(' ')
  //   .find((part) => part.startsWith('https'));
  //
  // return backendUrl + '/Api';
  return '';
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