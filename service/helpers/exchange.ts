import {CacheStore} from "./cacheStore";

const getExchangeRate = async (source: string, target: string): Promise<number> => {
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

class Exchange {
  private cache = new CacheStore();

  convert = async ({ source, target, amount }: { source: string; target: string; amount: number }) => {
    const fieldParams = {
      key: `${source}-${target}`,
      getter: async () => await getExchangeRate(source, target),
      ttl: 720 * 60_000
    }
    const rate = await this.cache.get(fieldParams.key, fieldParams);
    return rate * amount;
  }
}

const exchange = new Exchange();
export default exchange;