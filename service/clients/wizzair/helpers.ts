export async function getApiUrl (): Promise<string> {
  if (process.env.WIZZAIR_API_URL) {
    return process.env.WIZZAIR_API_URL;
  }

  const request = await fetch('https://wizzair.com/static_fe/metadata.json');
  const data = await request.json();
  return data.apiUrl;
}
