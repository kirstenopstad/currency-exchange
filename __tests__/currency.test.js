import Currency from "../src/js/currency";'../src/js/currency.js';

describe('Currency', () => {
  let currency;

  beforeEach(() => { 
    currency = new Currency(0, 'USD');
    })

  test('It should return a currency object with baseCurrency & baseCurrencyCode', () => {
    expect(currency.baseCurrency).toEqual(0);
    expect(currency.baseCurrencyCode).toEqual('USD');
  });

  test('It should return a currency object with placeholders for exchangeCurrency & exchangeCurrencyCode', () => {
    expect(currency.exchangeCurrency).toEqual(0);
    expect(currency.exchangeCurrencyCode).toEqual('');
  });

  test('It should return a currency object with placeholders for objects', () => {
    expect(currency.countryCodes).toEqual({});
    expect(currency.exchangeRates).toEqual({});
  });

  test('It should return false if country code input not a string', () => {
    let input = 5;
    expect(currency.getCountryCode(input)).toEqual(false);
  });

  test('It should return false if country code not supported', () => {
    let input = 'TAX';
    expect(currency.getCountryCode(input)).toEqual(false);
  });

})