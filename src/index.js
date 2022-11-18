import CurrencyExchangeService from '../src/js/currency-exchange-service.js';
import Currency from './js/currency.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Business Logic
function getAPIData(amtInput, exchangeInput) {
  let currency = new Currency(amtInput, 'USD');
  CurrencyExchangeService.getCountryCodes()
    .then((countryData) => {
      // Check if repsonse is error
      if (countryData instanceof Error) {
        // TODO: Write detailed error message
        const errorMsg = `There was an error contacting the ExchangeRate API. Error: ${countryData.message}`;
        throw new Error(errorMsg);
      }
      let countryArray = countryData.supported_codes;
      currency.countryCodes = countryArray;
      currency = parseResults(currency);
      console.log(exchangeInput);
      printResults(currency);
    })
    .catch(function(error) {
      printError(error);
    });
  // Validate exchange currency is supported
  return currency;
}

function parseResults(data) {
  // dataArray.forEach(function(country) {
  //   if (country.includes(countryInput)) {
  //     data.exchangeCurrencyCode = country[0];
  //     console.log(data.exchangeCurrencyCode)
  //   }
  // Add country code to exchangeRates obj
  
  return data;
}

// UI Logic

function printError(error) {
  document.querySelector("p#response").innerText = error;
}

function printResults(currencyData) {
  document.querySelector("p#response").innerText = currencyData.countryCodes[0];
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
    // Run getCurrencyCode(), store in variable
    // Run getExchangeValue(baseAmt, currencyCode)
    // Display value in exchange currency in DOM
    document.querySelector("p#response").innerText = "hello!";
  }
}

window.addEventListener("load", function() {
  // TODO: Get country codes & store in class 
  document.querySelector("form#exchange-form").addEventListener("submit", handleFormSubmission);
});