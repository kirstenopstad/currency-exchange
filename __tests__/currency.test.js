import '../src/js/currency.js';

describe('Currency', () => {

  test('It should return a currency object with baseCurrency & exchangeCurrency', () => {
    let currency = new Currency(0,0);
    expect(currency.baseCurrency).toEqual(0);
    expect(currency.exchangeCurrency).toEqual(0);
  });
})