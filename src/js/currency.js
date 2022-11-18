export default class Currency {
  constructor(baseCurrency, baseCurrencyCode) {
    this.baseCurrency = baseCurrency;
    this.exchangeCurrency = 0;
    this.baseCurrencyCode = baseCurrencyCode;
    this.exchangeCurrencyCode = '';
    this.countryCodes = {};
    this.exchangeRates = {};
  } 
  
  getCountryCode(input) {
    Object.keys(this.countryCodes).forEach((array) => {
      if (array.includes(input)) {
        this.exchangeCurrencyCode = array[0];
      }
    })
  }
}
