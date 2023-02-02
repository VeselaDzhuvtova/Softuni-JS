function aggregateElements (arr) {

    const sumAllElements = function (numbers) {
        numbers = numbers.reduce((a, b) => a + b, 0);
        return numbers;
    }
    const sumInverseValues = function (numbers) {
        let sum = 0;
        numbers.forEach(number => {
            sum += 1 / number;
        });
        return sum;
    }
    const concatAlElements = function (numbers) {
        let numberAsString = numbers.map(String);
        numberAsString = numberAsString.reduce((a, b) => a + b);
        return numberAsString;
    }
    const sum = sumAllElements(arr);
    const sumInverse = sumInverseValues(arr);
    const concat = concatAlElements(arr);
    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
}

aggregateElements ([1,2,3])