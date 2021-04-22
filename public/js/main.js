// assigning variables
const title = document.querySelector("title");
const mainHeading = document.querySelector("#mainHeading");
const currUnit = document.querySelector("#currUnit");
const userCurr = document.querySelector("#currencyName");
const options = document.querySelectorAll("option");
const conBtn = document.querySelector("#convertBtn");
const conUnit = document.querySelector("#resultField");
const conCurr = document.querySelector(".convertCurr");

// text content
title.textContent = "Currency Converter";
mainHeading.textContent = "Currency Converter";
options.forEach((curr) => {
    curr.innerHTML = curr.value;
});
convertBtn.innerHTML = "Convert &#8681;";


// functions
const convert = async () => {
    conUnit.value = "Calculating...";
    mainHeading.textContent = "Currency Converter";
    const API_URL = `https://api.ratesapi.io/api/latest?base=${userCurr.value}`;
    try {
        const data = await fetch(API_URL);
        const jsonData = await data.json();
        const arrKeys = await Object.keys(jsonData.rates);
        const arrValue = await Object.values(jsonData.rates);
        let value = "";

         for(let i = 0; i < arrKeys.length; i++){
            if(arrKeys[i] == conCurr.value){
                value += arrValue[i];
                 };
             };    

             const result = (currUnit.value * value).toFixed(5);
             conUnit.value = result;

    } catch (error) {
        console.log(error);
        mainHeading.textContent = "Please check your internet connection...";
    }
}

conBtn.addEventListener("click", convert);