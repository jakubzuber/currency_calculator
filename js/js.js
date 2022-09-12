let formElement = document.querySelector(".js-form")
let currencyInputElement = document.querySelector(".js-currencyInput");
let amountElement = document.querySelector(".js-amount");
let currencyOutputElement = document.querySelector(".js-currencyOutput");
let resultElement = document.querySelector(".js-result");

let eur = 4.7098;
let gbp = 5.4185;
let pln = 1;
let hkd = 0.5937;

formElement.addEventListener("input", () => {
    let currencyIn = currencyInputElement.value;
    let amountIn = amountElement.value;
    let currencyOut = currencyOutputElement.value;
  
    /*converting input values into PLN*/

    if (currencyIn === "eur") {
        amount = amountIn * eur;
    } else if (currencyIn === "gbp") {
        amount = amountIn * gbp;
    } else if (currencyIn === "hkd") {
        amount = amountIn * hkd;
    } else if (currencyIn === "pln") {
        amount = amountIn * pln;
    }

    /*converting from PLN to other currency*/

    if (currencyOut === "eur") {
        result = amount / eur;
    } else if (currencyOut === "gbp") {
        result = amount / gbp;
    } else if (currencyOut === "hkd") {
        result = amount / hkd;
    } else if (currencyOut === "pln") {
        result = amount / pln;
    }

    resultElement.innerText = result.toFixed(2);
});