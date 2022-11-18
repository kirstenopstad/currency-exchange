export default class Currency {
  constructor(baseCurrency, exchangeCurrency, baseCurrencyCode, exchangeCurrencyCode) {
    this.baseCurrency = baseCurrency;
    this.exchangeCurrency = exchangeCurrency;
    this.baseCurrencyCode = baseCurrencyCode;
    this.exchangeCurrencyCode = exchangeCurrencyCode;
  } 
}