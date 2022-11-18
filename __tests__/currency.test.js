import Currency from "../src/js/currency";'../src/js/currency.js';

describe('Currency', () => {

  test('It should return a currency object with baseCurrency & exchangeCurrency', () => {
    let currency = new Currency(0,0);
    expect(currency.baseCurrency).toEqual(0);
    expect(currency.exchangeCurrency).toEqual(0);
  });

  test('It should return a currency object with baseCurrencyCode & exchangeCurrencyCode', () => {
    let currency = new Currency(0,0,'USD','');
    expect(currency.baseCurrencyCode).toEqual('USD');
    expect(currency.exchangeCurrencyCode).toEqual('');
  });

})