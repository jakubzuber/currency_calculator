{   
    const eur = 4.7098;
    const gbp = 5.4185;
    const pln = 1;
    const hkd = 0.5937;
    

    const amountFunction = () => {
        const currencyInputElement = document.querySelector(".js-currencyInput");
        const amountElement = document.querySelector(".js-amount");
        switch (currencyInputElement.value) {
            case "eur":
                return +amountElement.value * eur;
            case "gbp":
                return +amountElement.value * gbp;
            case "hkd":
                return +amountElement.value * hkd;
            case "pln":
                return +amountElement.value * pln;
        }
    };

    const resultFunction = () => {
        const currencyOutputElement = document.querySelector(".js-currencyOutput");
        let amount = amountFunction();
        switch(currencyOutputElement.value) {
            case "eur":
                return amount / eur;
            case "gbp":
                return amount / gbp;
            case "hkd":
                return amount / hkd;
            case "pln":
                return amount / pln;
        }
    };

    const updateRestultText = () => {
        const resultElement = document.querySelector(".js-result");
        let result = resultFunction();
        resultElement.innerText = result.toFixed(2);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("input", updateRestultText)  
    }
    
     init()
}