let currencies = document.querySelectorAll(".currencies");
let convert = document.getElementById("convert");

fetch("https://api.frankfurter.app/currencies").then(

    (data) => data.json()).then((data) => {
        // console.log(data)
        let availableCurrencies = Object.entries(data)

        for (let i = 0; i < availableCurrencies.length; i++) {
            currencies[0].innerHTML += `<option value = ${availableCurrencies[i][0]}> ${availableCurrencies[i][0]}</option>`
            currencies[1].innerHTML += `<option value = ${availableCurrencies[i][0]}> ${availableCurrencies[i][0]}</option>`
        }
        // console.log(availableCurrencies)
    })

convert.addEventListener("click", function () {
    let fromCurrency = document.getElementById("fromCurrency");
    let toCurrency = document.getElementById("toCurrency");
    let result = document.getElementById("result");
    let fromCurrencyVal = fromCurrency.value;
    let toCurrencyVal = toCurrency.value;
    let amount = document.getElementById("amount").value;

    let amountVal = amount;
    // console.log(amount)
    if (isNaN(amountVal) || amountVal <= 0 ) {
        result.value = "Invalid amount!";
        return;
    }

    fetch(`https://api.frankfurter.app/latest?amount=${amountVal}&from=${fromCurrencyVal}&to=${toCurrencyVal}`)
        .then((data) => data.json())
        .then((data) => {
             let rate = data.rates[toCurrencyVal];
            //  console.log(rate)
             result.value = rate
            //  console.log(data)
        });
})

