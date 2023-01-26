const digitBar = document.getElementById("display");
const numberButtons = document.querySelectorAll(".numberButton")

let currentNumberShown = "0";
digitBar.innerText = currentNumberShown;

let value1 = 0;
let value2 = 0;

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

document.getElementById("plusButton").addEventListener("click", function(){
    value1 = parseInt(currentNumberShown);
    currentNumberShown = "0";
    digitBar.innerText = currentNumberShown;
    value2 = 0;
});
//chagne this function to include all operator buttons, but get operation and put in function.

document.getElementById("equalsButton").addEventListener("click", function(){
    value2 = parseInt(currentNumberShown);
    currentNumberShown = (value1 + value2).toString();
    value1 = parseInt(currentNumberShown);
    value2 = 0;
    digitBar.innerText = currentNumberShown;
    console.log(value1 + " " + value2 + " " + currentNumberShown);
});

document.getElementById("clearButton").addEventListener("click", function(){
    value1 = 0;
    value2 = 0;
    currentNumberShown = "0";
    digitBar.innerText = currentNumberShown;
});