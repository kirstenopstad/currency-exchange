// Export API Call Service
export default class CurrencyExchangeService {
  // Create static method to gather country code data
  static getCountryCodes() {
    // Return promise
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`)
      // Validate response
      .then(function(response) {
        if (!response.ok) {
          const errorMsg = `${response.status}`;
          throw new Error(errorMsg);
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        return error;
      });
  }
  // Create static method to gather exchange rate data
  static getExchangeRates() {
    // Return promise
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
    // Validate response
      .then(function(response) {
        if(!response.ok) {
          const errorMsg = `${response.status}`;
          throw new Error(errorMsg);
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        return error;
      });
  }

}