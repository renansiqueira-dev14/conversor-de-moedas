const convertButton = document.querySelector(".convert-button");
const currencyselect = document.querySelector(".currency-select");

function convertCurrency() {
    console.log(currencyselect.value);
    const inputcurrencyvalue = document.querySelector(".input-currency").value;
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert");
    const currencyvalueconvert = document.querySelector(".value");
    const dolartoday = 5.14;
    const eurotoday = 5.85;
    const librastoday = 6.86;
    const ienetoday = 0.032;


    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyvalue);


    if (currencyselect.value == "dolar") {
        currencyvalueconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue / dolartoday);
    }

    if (currencyselect.value == "euro") {
        currencyvalueconvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue / eurotoday);
    }





    if (currencyselect.value == "libra") {
        currencyvalueconvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyvalue / librastoday);
    }




    if (currencyselect.value == "iene") {
        currencyvalueconvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputcurrencyvalue / ienetoday)

    }












}




function changecurrency() {
    const currencyname = document.getElementById("currency-name")
    const currencyimg = document.querySelector(".currency-img")



    if (currencyselect.value == "dolar") {
        currencyname.innerHTML = "dolar"
        currencyimg.src = "./assets/dolar.png"
    }

    if (currencyselect.value == "euro") {
        currencyname.innerHTML = "euro"
        currencyimg.src = "./assets/euro.png"
    }

    if (currencyselect.value == "libra") {
        currencyname.innerHTML = "libra"
        currencyimg.src = "./assets/libra 1.png"
    }

   
  if (currencyselect.value == "iene") {
        currencyname.innerHTML = "iene"
        currencyimg.src = "./assets/jp..webp"
    }




    convertCurrency()
}

currencyselect.addEventListener("change", changecurrency)
convertButton.addEventListener("click", convertCurrency);