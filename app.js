

let previousNum = 0;
let currentNum = 0;
let operator = "";

const previousNumDisplay = document.querySelector(".previous");
const currentNumDisplay = document.querySelector(".curr");
const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".opers");
const equals = document.querySelector(".equals");
const decimal = document.querySelector(".decimal")
const clearButton = document.querySelector(".clear")
const deleteButton = document.querySelector(".delete")

numberButtons.forEach(num => {
    num.addEventListener("click", function () {
        if (num.textContent === '.' && currentNumDisplay.textContent === '') {
            currentNumDisplay.textContent = '0.';
        } else {
            currentNumDisplay.textContent += num.textContent;
        }
        // currentNumDisplay.textContent += num.textContent;
        currentNum = parseFloat(currentNumDisplay.textContent);
    });
});

operatorButtons.forEach(element => {
    element.addEventListener("click", function () {
        if (operator !== "") {
            calculate();
        }
        operator = element.textContent;
        previousNum = parseFloat(currentNumDisplay.textContent);
        previousNumDisplay.textContent = previousNum + " " + operator;
        currentNumDisplay.textContent = "";
    });
});

function calculate() {
    switch (operator) {
        case "+":
            previousNum += currentNum;
            break;
        case "-":
            previousNum -= currentNum;
            break;
        case "×":
            previousNum *= currentNum;
            break;
        case "÷":
            previousNum /= currentNum;
            break;
    }

    // previousNumDisplay.textContent = previousNum;
}

equals.addEventListener("click", function () {
    if (operator !== "") {
        calculate();
        currentNumDisplay.textContent = "";
        previousNumDisplay.textContent = previousNum;
        operator = "";
    }
});

decimal.addEventListener("click", function () {
    console.log("clicked")
    if (!currentNumDisplay.textContent.includes(".")) {
        currentNumDisplay.textContent += "."
    }
})

clearButton.addEventListener("click", function () {
    currentNumDisplay.textContent = ""
    previousNumDisplay.textContent = ""
    operator = ''
})

deleteButton.addEventListener("click", function () {

    //the slice doesnt just delete one value it replaces with a new array hence 
    let currentText = currentNumDisplay.textContent;
    currentText = currentText.slice(0, -1)
    //display the updated one
    currentNumDisplay.textContent = currentText;
})