function mathOperations (first, second, delimiter) {

    let result;

    if (delimiter === '+') {
        result = first + second;
    } else if (delimiter === '-') {
        result = first - second;
    } else if (delimiter === '*') {
        result = first * second;
    } else if (delimiter === '/') {
        result = first / second;
    } else if (delimiter === '%') {
        result = first % second;
    } else if (delimiter === '**') {
        result = first ** second;
    }
    console.log(result)
 }
mathOperations (5, 6, '+')