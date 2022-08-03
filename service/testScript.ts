import { getApiUrl } from 'clients/wizzair/auth';
import { getFares } from 'clients/wizzair/fares';

const getRate = async (source: string, target: string) => {
  const res = await fetch(
    encodeURI(`https://www.google.com/search?q=1+${source.toUpperCase()}+to+${target.toUpperCase()}&hl=en`)
  );
  const html = await res.text();
  const divPattern = /<div class="[^"]*?iBp4i[^"]*?">([0-9a-zA-Z.\s]+)<\/div>/g;
  const contentPattern = />(.*?)</;
  const content = html.match(divPattern)?.[0]
    ?.match(contentPattern)?.[0]
    ?.replace('>', '')
    ?.replace('<', '');
  return parseFloat(content || '');
};

async function run () {
  const data = await getTransavia();
  console.log(data);
}

const getTransavia = async () => {
  const res = await fetch('https://www.transavia.com/en-EU/book-a-flight/flights/calendar/', {
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'request-context': 'appId=cid-v1:8748f4a5-50a8-4ae9-8e43-546b74cea8b2',
      'request-id': '|bfddb2cc7c304a1fa973b2baa1625acd.15270aef190a43fe',
      'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      traceparent: '00-bfddb2cc7c304a1fa973b2baa1625acd-15270aef190a43fe-01',
      'x-requested-with': 'XMLHttpRequest',
      cookie: 'websiteeu#lang=en; ASP.NET_SessionId=hu2f40uya4fccsium1ib34qk; SC_ANALYTICS_GLOBAL_COOKIE=317dab68e443445a8310b30790a6061c|False; visid_incap_2445686=+Ns7M9LDTU+WFPZfJ1KjTFAsxGIAAAAAQUIPAAAAAAD95wehpqyi1SkqE9s8majO; nlbi_2445686=IbZScXv+ug2g2tRzV7XfuAAAAADAdZCCCDT8gXbU0GtA4FFY; _ga=GA1.2.1218391621.1657023570; df_fv=1; _stCookieTest=true; cookies_accepted=true; _svtri=2fd62987-48da-473d-967c-dc5d92b7016d; _svs=%7B%22c%22%3A%7B%221%22%3Afalse%2C%222%22%3Afalse%2C%223%22%3Atrue%2C%224%22%3Atrue%2C%225%22%3Atrue%7D%2C%22ct%22%3A1657023571676%2C%22v%22%3A2%2C%22p%22%3A%7B%223001%22%3A1657023571680%7D%7D; wzuid=742158f9181ce4d27df; __RequestVerificationToken=CVxA9IeXU5d7Jq85S3qmmAiywzWtNM3SuH2dOh_F7eJEzZn4tohPPfEcypy8QQeFwNyKsjRCg4cxf8lBPybklQTJ_9Gf2OkNpyspVDLfRBY1; sitelang=/en-EU/; criticalCss=C-JkyB1KoM58RpYx6JRbPvm_MZ8MYlmsGqnw7HQ8Mx81; ai_user=GWgGirnshxpKpO18Hma37b|2022-07-05T12:19:38.425Z; ConsentStatus=provided|necessary,statistics,marketing; _gcl_au=1.1.2131700936.1657023579; _pin_unauth=dWlkPU1EZzROV0k0TmpZdFpEZGpaaTAwTURVMUxXRTNZbUV0TVRZNE5qRmtOREUwT0dRMA; TiPMix=49.6728044700217; x-ms-routing-name=self; incap_ses_374_2445686=mPXIA0jCqQbHBDQUsbcwBWu21GIAAAAA/hl34fSZ5Miy8x2HOU9VXw==; _gid=GA1.2.1895214536.1658107504; _gac_dummy=1.1658107504.CjwKCAjw5s6WBhA4EiwACGncZej_Ewggl0jwRGOeHh8-wmcoWCXFDjQ5-csBnejxB4ch_-03lW6X0hoCdKkQAvD_BwE; df_vs=1; df_vn=2; reese84=3:TKCkYjqhgcgxnpvxi9Idmg==:5iCBdtES/zUL1rZWo7t7eRVZKWWXeZA36Q2S/l4qtQE6TmNUrCdedabshYOJAHfkykjYO0Elkb8eu36xTgMZxpTh7f933nShRcWYsNJfx/dsQq5GBgvchpeUGj7edjU2KKbtGU0wSIw5co8+zsOKjfMAjLyU9cUczTd9d7fNihQUuWCHUfBybjPdCh27aUV3Uz8laqbWQygP0bUUOPpsVVnWZ1wAH1own+yYG2LMc/9v3xegTAmtwNQrMqKCxFDlD0aUD1RoH6ekPJaOnsTbgMabsIoiOSNZZD8Ul2eKqpGGFaLq+jH9UeL/rPJ8gFbph/2DSlDfMgB8MQIedL00oW9kIPz7FitCcaxn0qEfQiBgikcpFmk0UZEQaU48zGyPdI2xosOkVkA5Hr/hrTGs1qQ2mFYPXwx8sbyBM3oDiBx6+ZlSNrNcZtfTkppy69sc:l5NzLJE4ycq0OWYf7S3vtlNsBQIKOqGCgnxZOf8koTE=; _sp_ses.be0f=*; _gcl_aw=GCL.1658107505.CjwKCAjw5s6WBhA4EiwACGncZej_Ewggl0jwRGOeHh8-wmcoWCXFDjQ5-csBnejxB4ch_-03lW6X0hoCdKkQAvD_BwE; _gcl_dc=GCL.1658107505.CjwKCAjw5s6WBhA4EiwACGncZej_Ewggl0jwRGOeHh8-wmcoWCXFDjQ5-csBnejxB4ch_-03lW6X0hoCdKkQAvD_BwE; AMP_TOKEN=%24NOT_FOUND; _gac_UA-9683535-11=1.1658107506.CjwKCAjw5s6WBhA4EiwACGncZej_Ewggl0jwRGOeHh8-wmcoWCXFDjQ5-csBnejxB4ch_-03lW6X0hoCdKkQAvD_BwE; _clck=13i2h72|1|f39|0; _gaexp=GAX1.2.C-QK2vDjTaaE1REr_nXpAQ.19277.2; _r42_bookaflight_flightsearch_30={"bookaflight_flightsearch_flight_inbound_all_30":{"v":["AMS|BEG|2022-07-13","AMS|JMK|2022-07-26","AMS|CFU|2022-07-26"],"t":2,"s":30},"bookaflight_flightsearch_flight_outbound_all_30":{"v":["BEG|AMS|2022-07-06","JMK|AMS|2022-07-19","CFU|AMS|2022-07-19"],"t":2,"s":30},"audience":"1194_201","type":"search_30"}; _r42_bookaflight_flightsearch_last={"bookaflight_flightsearch_flight_outbound_all":"CFU|AMS|2022-07-19","bookaflight_flightsearch_flight_inbound_all":"AMS|CFU|2022-07-26","audience":"1194_289","type":"search_last"}; _gat_advGaTracker=1; df_bpln=10; _uetsid=73b233f0063811ed9049b7ac74c893cf; _uetvid=be1d08b0fc5c11ecbd90f1a12da37023; ai_session=26ouI08dcNeVm9tct27XY0|1658107504921|1658108015015; _derived_epik=dj0yJnU9X3o4dldvaFc5T0hCV3RZNHBPTlRTQmlfaTBEZnVEM2cmbj1sc1FKbTNSU0U0VkhZVUNCb0x4N3FBJm09MSZ0PUFBQUFBR0xVdUc4JnJtPTEmcnQ9QUFBQUFHTFV1Rzg; nlbi_2445686_2147483392=Yl22MriRJ24dL4Y9V7XfuAAAAAC5/4aod8RmAz4hToeZgvOx; _clsk=t8tlpl|1658108015942|10|1|n.clarity.ms/collect; _sp_id.be0f=bec3c741-5735-dfc8-8228-b262a9f29b09.1657023585.2.1658108022.1657023591.6c5c5594-c366-4a39-85d4-82b2219e6e64'
    },
    referrer: 'https://www.transavia.com/en-EU/book-a-flight/flights/search/',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: null,
    method: 'GET',
    mode: 'cors',
    credentials: 'include'
  });

  return await res.text();
};

const r = async () => {
  console.log(await getRate('HUF', 'EUR'));
};

r();
