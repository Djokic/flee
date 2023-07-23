/**
 * Generate search url from base url and params
 * @param baseUrl
 * @param paramsGroups
 */
export function generateSearchUrl(baseUrl: string, params: (string | undefined)[]) {
  return `${baseUrl}/${params.join('/')}`;
}