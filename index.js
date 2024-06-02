function displayError(msg) {
    resultText.innerHTML = msg;
};

function displayResult([firstNumber, lastNumber], result) {
    resultText.innerHTML = 'The result is : <span id="user-result">' + result + '</span>';
} 

function validateInputs() {
    let errorMsg = "";
    const firstNumber = parseFloat(document.getElementById("first-number").value);
    const lastNumber = parseFloat(document.getElementById("second-number").value);
    
    if (isNaN(firstNumber) || isNaN(lastNumber)) {
        errorMsg = "Input values should be numbers and not empty.";
    } return {
        values: [firstNumber, lastNumber],
        errorMsg
    };
}

function addition([num1, num2]){
    return num1 + num2;
}

function subtraction([num1, num2]){
    return num1 - num2;
}

function multiply([num1, num2]){
    return num1 * num2;
}

function divide([num1, num2]){
    return num1 / num2;
}

const buttons = [ document.getElementById("add"), document.getElementById("subtract"), document.getElementById("multiply"), document.getElementById("divide")];

const resultText = document.getElementById("result");

for(let i = 0; i < 4; i++){
    buttons[i].addEventListener("click", function(){
        const { errorMsg, values } = validateInputs();
        if (errorMsg) {
            displayError(errorMsg);
            resultText.style.color = "#e5f0fa";
        } else {
            const results = [addition(values), subtraction(values), multiply(values), divide(values)];
            const result = results[i].toFixed(5);
            displayResult(values, result);
            resultText.style.color = "white";
        }
    });
}