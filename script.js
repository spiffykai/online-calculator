const digitBar = document.getElementById("display");
const decimalButton = document.getElementById("decimalButton");
const negativeButton = document.getElementById("negativeButton");
const clearButton = document.getElementById("clearButton");
const equalsButton = document.getElementById("equalsButton");

const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operationButton");

let stringValue = "0";
digitBar.innerText = stringValue;
let currentOperation = "+";
let value1 = 0.0;
let value2 = 0.0;

//go through list of number buttons and add event listener to add to string
for (let x in numberButtons){
    if (numberButtons[x].nodeName == "BUTTON"){
        numberButtons[x].addEventListener("click", function(){
            addToString(numberButtons[x].innerText);
        });
    }
}

//go through list of operator buttons, when button is clicked then currentOperation equals that button
for (let x in operatorButtons){
    if (operatorButtons[x].nodeName == "BUTTON"){
        operatorButtons[x].addEventListener("click", function(){
            currentOperation = operatorButtons[x].innerText;
            value1 = parseFloat(stringValue);
            value2 = 0.0;
            //update the string but not the display to reflect how a real calculator works
            stringValue = "0";
        });
    }
}

//when equals button is pressed, the current operation is processed
equalsButton.addEventListener("click", function(){
    value2 = parseFloat(stringValue);

    switch (currentOperation) {
        case "+":
            stringValue = String(value1 + value2);
            break;
        case "-":
            stringValue = String(value1 - value2);
            break;
        case "*":
            stringValue = String(value1 * value2);
            break;
        case "/":
            stringValue = String(value1 / value2);
            break;
        case "%":
            stringValue = String(value1 % value2);
            break;
    }

    digitBar.innerText = stringValue;
});

//add decimal to string only if string doesnt already contain a decimal point
decimalButton.addEventListener("click", function(){
    if (!stringValue.includes('.')) {
        addToString('.');
    }
});

//add negative sign if there isnt one, and if there is remove it
negativeButton.addEventListener("click", function(){
    if (!stringValue.includes('-')) {
        stringValue = '-' + stringValue;
    } else if (stringValue.includes('-')){
        stringValue = stringValue.replace('-', '');
    }

    digitBar.innerText = stringValue;
});

//clear all numbers and values
clearButton.addEventListener("click", function(){
    stringValue = "0";
    digitBar.innerText = stringValue;
    value1 = 0;
    value2 = 0;
    currentOperation = "+";
});

//add character to current string.
function addToString(charToAdd){
    if (stringValue == "0") {
        stringValue = charToAdd;
    } else if (stringValue == "-0") {
        stringValue = "-" + charToAdd;
    } else {
        stringValue += charToAdd;
    }

    //update html digitbar
    digitBar.innerText = stringValue;
}