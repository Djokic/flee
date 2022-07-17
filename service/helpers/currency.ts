const CC = require('currency-converter-lt');

type ConvertCurrencyParams = {
  from: string;
  to: string;
  amount: number
}

export async function convertCurrency (params: ConvertCurrencyParams) {
  const currencyConverter = new CC(params);
  return await currencyConverter.convert();
}
