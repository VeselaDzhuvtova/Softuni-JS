function mathOperation1(a, b, operator) {

const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '%': (a, b) => a % b,
    '**': (a, b) => a ** b,
}
    console.log(operators[operator](a, b));
}


mathOperation1(5, 6, '+');
mathOperation1(3, 5.5, '*')