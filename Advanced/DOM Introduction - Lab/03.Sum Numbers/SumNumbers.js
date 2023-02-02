// function calc() {
//     let firstNumberElement = document.getElementById('num1');
//     let secondNumberElement = document.getElementById('num2');

//     let firstNumber = Number(firstNumberElement.value);
//     let secondNumber = Number(secondNumberElement.value);

//     let sum = firstNumber + secondNumber;

//     let resultElement = document.getElementById('sum');
//     resultElement.value = sum;
// }


// function calc() {
//     let first = document.getElementById('num1').value;
//     let second = document.getElementById('num2').value;

//     let result = Number(first) + Number(second);
//     document.getElementById('sum').value = result;
// }

function calc() {
    const first = document.getElementById('num1').value;
    const second = document.getElementById('num2').value;
    const result = Number(first) + Number(second);

    if (Number.isNaN(result)) {
        alert('Please enter numbers!')
    } else {
        document.getElementById('sum').value = result;
    }
}