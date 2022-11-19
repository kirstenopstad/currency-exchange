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
    // If not a string, return false
    if (typeof input != "string") {
      return false;
    } else {
      // Ready input for comparison
      input.toUpperCase().trim();
      // If country code in supported country list, return true
      if (this.countryCodes[input]) {
        this.exchangeCurrencyCode = input;
        return true;
      } else {
        // Else not found in country codes list, return false
        return false;
      }
    }
  }

  getExchangeCurrency(countryCode) {
    let exchangeRate = this.exchangeRates[countryCode];
    this.exchangeCurrency = this.baseCurrency * exchangeRate;
    this.exchangeRate = exchangeRate;
    this.exchangeCurrencyName = this.countryCodes[countryCode];
    return this.exchangeCurrency;
  }
}
