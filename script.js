const digitBar = document.getElementById("display");
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operationButton");

let currentNumberShown = "0";
digitBar.innerText = currentNumberShown;

let value1 = 0.0;
let value2 = 0.0;
let decimalUsed = false;

let currentOperation = "+";

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
            //digitBar.innerText = currentNumberShown;
            value2 = 0;
        });
    }
}

document.getElementById("equalsButton").addEventListener("click", function(){
    operation(currentOperation);
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
}

document.getElementById("clearButton").addEventListener("click", function(){
    value1 = 0;
    value2 = 0;
    currentNumberShown = "0";
    digitBar.innerText = currentNumberShown;
});