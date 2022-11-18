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
function handleFormSubmission {
  // Get values of base amt & exchange currency
    // Validate base amount is number
    // Run getCurrencyCode(), store in variable
  // Run getExchangeValue(baseAmt, currencyCode)
  // Display value in exchange currency in DOM
}
window.addEventListener("load", function() {
  // TODO: Get country codes & store in class 
  document.querySelector("form#exchange-form").addEventListener("submit", handleFormSubmission)
});