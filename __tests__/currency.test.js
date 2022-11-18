import Currency from "../src/js/currency";'../src/js/currency.js';

describe('Currency', () => {

  test('It should return a currency object with baseCurrency & baseCurrencyCode', () => {
    let currency = new Currency(0, 'USD');
    expect(currency.baseCurrency).toEqual(0);
    expect(currency.baseCurrencyCode).toEqual('USD');
  });

  test('It should return a currency object with placeholders for exchangeCurrency & exchangeCurrencyCode', () => {
    let currency = new Currency(0, 'USD');
    expect(currency.exchangeCurrency).toEqual(0);
    expect(currency.exchangeCurrencyCode).toEqual('');
  });

  test('It should return a currency object with placeholders for objects', () => {
    let currency = new Currency(0, 'USD');
    expect(currency.countryCodes).toEqual({});
    expect(currency.exchangeRates).toEqual({});
  });

})