function equalSumsEvenOddPosition(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let result = '';

    for (let currentNum = num1; currentNum <= num2; currentNum++) {
        let currentNumAsString = currentNum.toString();

        let evenSum = 0;
        let oddSum = 0;

        for (let index = 0; index < currentNumAsString.length; index++) {
            let currentDigit = Number(currentNumAsString[index]);
            let position = index + 1;

            if (position % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (evenSum === oddSum) {
            result += `${currentNumAsString} `;
        }
    }
    console.log(result);
}