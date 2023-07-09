
export async function getApiUrl (): Promise<string> {
  const request = await fetch('https://wizzair.com/static_fe/metadata.json');
  const data = await request.json();
  return data.apiUrl;
}
