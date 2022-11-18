export default class Currency {
  constructor(baseCurrency, baseCurrencyCode) {
    this.baseCurrency = baseCurrency;
    this.exchangeCurrency = 0;
    this.baseCurrencyCode = baseCurrencyCode;
    this.exchangeCurrencyCode = '';
    this.countryCodes = {};
    this.exchangeRates = {};
  } 
}
