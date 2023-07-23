export enum SearchPartPlaceholder {
  ANYWHERE = 'anywhere',
  ANYTIME = 'anytime',
}

/**
 * Generate search url from base url and params
 * @param baseUrl
 * @param params
 */
const anytimeRegex = new RegExp(`\/${SearchPartPlaceholder.ANYTIME}$`);
const anywhereRegex = new RegExp(`\/${SearchPartPlaceholder.ANYWHERE}$`);
export function generateSearchUrl(baseUrl: string, params: (string | SearchPartPlaceholder)[]) {
  let url = `${baseUrl}/${params.join('/')}`;
  while(url.match(anytimeRegex) || url.match(anywhereRegex)) {
    url = url.replace(anytimeRegex, '').replace(anywhereRegex, '');
  };
  return url;
}

/**
 * Parse search url to params
 * @param url
 *
 */
export function parseSearchUrl(url: string) {

}