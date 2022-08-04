const Browser = require('zombie');

export async function getApiUrl (): Promise<string> {
  const browser = new Browser();
  await browser.visit('https://wizzair.com/static_fe/metadata.json');
  const apiUrl = JSON.parse(browser.resources[0].response.body).apiUrl;
  browser.destroy();
  return apiUrl;
}
