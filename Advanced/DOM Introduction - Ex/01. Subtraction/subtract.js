// function subtract() {

//     let first = document.getElementById('firstNumber');
//     let second = document.getElementById('secondNumber');

//     let firstNumber = Number(first.value);
//     let secondNumber = Number(second.value);

//     let result = firstNumber - secondNumber;

//     let resultElement = document.getElementById('result');
//     resultElement.textContent = result;
//     console.log(result);
// }


function subtract() {

    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;

    let result = document.getElementById('result');

    let sum = Number(firstNumber) - Number(secondNumber);

    result.textContent = sum;
    console.log(result);

}