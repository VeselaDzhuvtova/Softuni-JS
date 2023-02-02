function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    let sum = 0;
    let evenOrOdd = "";

    switch (operator) {
        case "+":
            sum = n1 + n2;
            if (sum % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            break;
        case "-":
            sum = n1 - n2;
            if (sum % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            break;
        case "*":
            sum = n1 * n2;
            if (sum % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            break;
        case "/":
                sum = n1 / n2;
            break;
        case "%":
            sum = n1 % n2;
    }
    if (n1 === 0) {
        console.log(`Cannot divide ${n2} by zero`);
    } else if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
    } else if (operator == "+" || operator == "-" || operator == "*")
        console.log(`${n1} ${operator} ${n2} = ${sum} - ${evenOrOdd}`);
    else if (operator == "/") {
        console.log(`${n1} ${operator} ${n2} = ${sum.toFixed(2)}`);
    } else if (operator == "%") {
        console.log(`${n1} ${operator} ${n2} = ${sum}`);
    }
}
operationsBetweenNumbers(["10",
"12",
"+"])