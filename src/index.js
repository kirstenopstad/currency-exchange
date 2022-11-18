import '../src/js/currency-exchange-service.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Business Logic
function getCurrencyCode() {
  // Validate exchange currency is supported
}

function getExchangeValue() {
  
}

// UI Logic
function handleFormSubmission() {
  event.preventDefault();
  // Return error if user inputs nothing 
  if (!document.getElementById("input-base-currency").value || !document.getElementById("input-exchange-currency").value) {
    document.querySelector("p#response").innerText = "Must enter base amount and currency to get exchange rate!"
    return console.error("No input")
  } else {
    // Get values of base amt & exchange currency
    const inputBaseAmt = document.getElementById("input-base-currency").value;
    const inputCurrencyName = document.getElementById("input-exchange-currency").value;
      // Validate base amount is number
      // Run getCurrencyCode(), store in variable
      // const currencyCode = getCurrencyCode(inputCurrencyName)
      const currencyCode = "KRW"
      console.log(getCurrencyCode(inputCurrencyName));
    // Run getExchangeValue(baseAmt, currencyCode)
    console.log(getExchangeValue(inputBaseAmt, currencyCode));
    // Display value in exchange currency in DOM
    document.querySelector("p#response").innerText = "hello!"
  }
}
window.addEventListener("load", function() {
  // TODO: Get country codes & store in class 
  document.querySelector("form#exchange-form").addEventListener("submit", handleFormSubmission)
});