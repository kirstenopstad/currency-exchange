import CurrencyExchangeService from '../src/js/currency-exchange-service.js';
import Currency from './js/currency.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Utilities
// Business Logic
function getAPIData(amtInput, exchangeInput) {
  let currency = new Currency(amtInput, 'USD');
  CurrencyExchangeService.getCountryCodes()
    .then((countryData) => {
      // Check if repsonse is error
      if (countryData instanceof Error) {
        const errorMsg = `There was an error contacting the ExchangeRate API to access supported country codes. Error: ${countryData.message}`;
        throw new Error(errorMsg);
      }
      // Add country data to currency object
      currency.countryCodes = countryData.supported_codes;
      parseResults(currency);
      // Validate exchange currency is supported
      if (!currency.getCountryCode(exchangeInput)) {
        const errorMsg = "Invalid currency code.";
        throw new Error(errorMsg);
      }
      return CurrencyExchangeService.getExchangeRates();
    })
    .then((exchangeRateData) => {
      // Check if response is error
      if (exchangeRateData instanceof Error) {
        const errorMsg = `There was an error contacting the ExchangeRate API to access exchange rate data. Error: ${exchangeRateData.message}`;
        throw new Error(errorMsg);
      }
      // Add exchange rate data to currency object
      currency.exchangeRates = exchangeRateData.conversion_rates;
      // Run exchange calc method on currency
      currency.getExchangeCurrency(currency.exchangeCurrencyCode);
      // Return currency
      printResults(currency);
    })
    
    .catch(function(error) {
      printError(error);
    });
  return currency;
}

function parseResults(data) {
  let countryArrays = data.countryCodes;
  countryArrays.forEach((countryArray, index) => {
    Object.defineProperty(data.countryCodes, countryArray[0], {value: countryArray[1]});
    delete data.countryCodes[index];
  });
}

function roundToTwo(number) {
  number = parseFloat(Number.parseFloat(number).toFixed(2));
  return number;
}

// UI Logic
function toUSD(value) {
  value = `$${value}`
  return value
}

function printError(error) {
  document.querySelector("p#response").innerText = error;
}

function printResults(currencyData) {
  currencyData.baseCurrency = toUSD(currencyData.baseCurrency);
  currencyData.exchangeRate = roundToTwo(currencyData.exchangeRate)
  document.querySelector("p#response").innerText = `Base: ${currencyData.baseCurrency} ${currencyData.baseCurrencyCode}
  Exchange: ${currencyData.exchangeCurrency} ${currencyData.exchangeCurrencyCode} (${currencyData.exchangeCurrencyName})
  Based on a ${currencyData.exchangeRate} rate of exchange.`;
}

function handleFormSubmission() {
  event.preventDefault();
  // Return error if user inputs nothing 
  if (!document.getElementById("input-base-currency").value || !document.getElementById("input-exchange-currency").value) {
    document.querySelector("p#response").innerText = "Must enter base amount and currency to get exchange rate!";
  } else {
    // Get values of base amt & exchange currency
    const inputBaseAmt = document.getElementById("input-base-currency").value;
    const inputCurrencyName = document.getElementById("input-exchange-currency").value;
    // Validate base amount is number
    // Run getAPIData()
    getAPIData(inputBaseAmt, inputCurrencyName);
  }
}

window.addEventListener("load", function() {
  // TODO: Get country codes & store in class 
  document.querySelector("form#exchange-form").addEventListener("submit", handleFormSubmission);
});