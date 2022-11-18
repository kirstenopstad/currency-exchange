// Export API Call Service
export default class CurrencyExchangeService {
  // Create static method to gather country code data
  static getCountryCodes() {
    // Return promise
    return fetch(`https://v6.exchangerate-api.com/v6/API_KEY/codes`)
      // Validate response
      .then(function(response) {
        if (!response) {
          throw new Error("API ERROR");
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        return error;
      });
  }
  // Create static method to gather country code data
  static getExchangeRates() {
  }
}