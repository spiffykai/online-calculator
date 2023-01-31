const digitBar = document.getElementById("display");
const decimalButton = document.getElementById("decimalButton");
const negativeButton = document.getElementById("negativeButton");
const clearButton = document.getElementById("clearButton");

const numberButtons = document.querySelectorAll(".numberButton");

let stringValue = "0";
digitBar.innerText = stringValue;

//go through list of number buttons and add event listener to add to string
for (let x in numberButtons){
    if (numberButtons[x].nodeName == "BUTTON"){
        numberButtons[x].addEventListener("click", function(){
            addToString(numberButtons[x].innerText);
        });
    }
}

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
});

//add character to current string.
function addToString(charToAdd){
    if (stringValue == "0") {
        stringValue = charToAdd;
    } else {
        stringValue += charToAdd;
    }

    //update html digitbar
    digitBar.innerText = stringValue;
}

//push everything through string
//account for decimal, negative