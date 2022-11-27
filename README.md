# Currency Exchange

#### By Kirsten Opstad

#### A currency exchange web app that uses API callbacks

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* webpack
* Node.js

## Description

### Objectives (MVP)
Create a currency exchange application. A user should be able to type in an amount (in U.S. dollars) and then choose which currency it should be converted to (such as francs, marks, rupees, and so on). To determine the most recent exchange rate, your application will make an API call to the following [exchange rate API](https://app.exchangerate-api.com/).

* A user should be able to enter an amount (in U.S. dollars), then specify another currency (such as the South Korean won), and submit a form. The user should then see the total amount they entered in converted currency. For example, a user might enter 10 dollars and then see that amount in South Korean won.
* Users should be able to convert U.S. currency into at least 5 other types of currency.
* If the API call results in an error (any message not a 200 OK), the application should return a notification to the user that states what the error is. (That means the error should show up in the DOM, not in the console.)
* If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.)

Basis for review:
* Does the application correctly make an API call?
* Does the application correctly parse data from the API response?
* Does the application handle errors when the API call doesn't return a 200 OK status as well as return a message if the API returns no results?
* Did you follow all setup instructions, including storing your API key and adding instructions for setup in your README?
* Does the app separate logic into different JavaScript files and use a static method?
* Does the application correctly use webpack?
* Project is in a polished, portfolio-quality state.
* The prompt’s required functionality and baseline project requirements are in place by the deadline.

<!-- 
This template includes placeholders for:

[x] Screenshots

![Screenshots](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.03bZmDGXaBhBYyxxp3Ls3gHaEA%26pid%3DApi&f=1&ipt=e980d57210242747a51c41421e1f09a6de3b1fdaeaadd297496787bb64e80c88&ipo=images) -->

[Link to operational site!](https://kirstenopstad.github.io/currency-exchange/)

### Goals
1. Meet MVP Requirements. ✅
2. Allow users to convert currency between all available currency types. ✅
3. Allow users to convert currency both to and from U.S. dollars.
4. Use a dropdown menu for currencies.
5. Stretch: Cache the API's results, so you only need to make the call once as long as a user is on the site. Try using session storage for this. If exchange rates are successfully being stored in session storage, an API call shouldn't be made. Instead, the rates can be grabbed directly from session storage.

## Setup/Installation Requirements

* To use this app, you will need to create an account and get an API key from [Exchange Rate API](https://app.exchangerate-api.com/).
  * Visit the ExchangeRate-API site. Input your email address and click the "Get Free Key" button.
  * You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"
  * At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month.

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* In the root directory of the project, run this command to install all packages listed in the package.json:
```
$ npm install
```
* Then, to add API access:
  * Open .gitignore and add .env to the list of things git should ignore
  ```
  node_modules/
  .DS_Store
  dist/
  coverage/
  .env
  ```
  * Next create .env file and define a variable **API_KEY** that holds _your API key_ and save it
  ```
  API_KEY=your-api-key-not-this-text
  ```
* Then, to build and serve the project, run: 
```
$ npm run start
```
To run tests with Jest, run:
```
$ npm run test
```

## Known Bugs

* No known bugs. If you find one, please email me at kirsten.opstad@gmail.com with the subject **[_Repo Name_] Bug** and include:
  * BUG: _A brief description of the bug_
  * FIX: _Suggestion for solution (if you have one!)_
  * If you'd like to be credited, please also include your **_github user profile link_**

## License

MIT License

Copyright (c) 2022 Kirsten Opstad

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.