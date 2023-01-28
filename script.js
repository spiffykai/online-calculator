const digitBar = document.getElementById("display");
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operationButton");
const decimalButton = document.getElementById("decimalButton");
const negativeButton = document.getElementById("negativeButton");

let currentNumberShown = "0";
digitBar.innerText = currentNumberShown;

let value1 = 0.0;
let value2 = 0.0;
let isValue1 = true;
let isValue2 = false;
let decimalUsed = false;
let isNegative = false;

let currentOperation = "+";

decimalButton.addEventListener("click", function(){
    if(!decimalUsed){
        if (currentNumberShown == "0" && currentNumberShown.length < 10) {
            currentNumberShown = ".";
            decimalUsed = true;
        } else if (currentNumberShown.length < 10) {
            currentNumberShown += ".";
            decimalUsed = true;
        }
        digitBar.innerText = currentNumberShown;
    }
});

negativeButton.addEventListener("click", function(){
    if (!isNegative){
        if(currentNumberShown = "0"){
            currentNumberShown = "-";
        } else {
            currentNumberShown = "-" + currentNumberShown;
        }
        isNegative = true;
    } else if (isNegative){
        currentNumberShown = currentNumberShown.replace("-", '');
        isNegative = false;
    }
    digitBar.innerText = currentNumberShown;
});

for (let x in numberButtons){
    if (numberButtons[x].nodeName == "BUTTON"){
        console.log(numberButtons[x].innerText);
        numberButtons[x].addEventListener("click", function(){
            if (currentNumberShown == "0" && currentNumberShown.length < 10) {
                currentNumberShown = numberButtons[x].innerText;
            } else if (currentNumberShown.length < 10) {
                currentNumberShown += numberButtons[x].innerText;
            }
            digitBar.innerText = currentNumberShown;
        });
    }
}

for (let x in operatorButtons) {
    if (operatorButtons[x].nodeName == "BUTTON"){
        operatorButtons[x].addEventListener("click", function(){
            currentOperation = operatorButtons[x].innerText;
            value1 = parseFloat(currentNumberShown);
            currentNumberShown = "0";
            decimalUsed = false;
            //digitBar.innerText = currentNumberShown;
            isValue1 = false;
            isValue2 = true;
            value2 = 0;
        });
    }
}

document.getElementById("equalsButton").addEventListener("click", function(){
    operation(currentOperation);
    decimalUsed = false;
});

function operation(operationToUse){
    value2 = parseFloat(currentNumberShown);

    switch (operationToUse){
        case "+":
            currentNumberShown = parseFloat(value1 + value2);
            break;
        case "-":
            currentNumberShown = parseFloat(value1 - value2);
            break;
        case "*":
            currentNumberShown = parseFloat(value1 * value2);
            break;
        case "/":
            currentNumberShown = parseFloat(value1 / value2);
            break;
        case "%":
            currentNumberShown = parseFloat(value1 % value2);
            break;
    }

    value1 = parseFloat(currentNumberShown);
    value2 = 0;
    digitBar.innerText = currentNumberShown;
    isValue1 = true;
    isValue2 = false;
}

document.getElementById("clearButton").addEventListener("click", function(){
    value1 = 0;
    value2 = 0;
    currentNumberShown = "0";
    digitBar.innerText = currentNumberShown;
    decimalUsed = false;
    isValue1 = true;
    isValue2 = false;
});