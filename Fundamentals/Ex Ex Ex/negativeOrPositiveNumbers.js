function negativeOrPositiveNumbers(arr) {

    let result = [];
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let currentNum = arr[i];
        if (currentNum < 0) {
            result.unshift(currentNum);
        } else {
            result.push(currentNum);
        }
    }
    console.log(result.join('\n'))
} 
negativeOrPositiveNumbers(['7', '-2', '8', '9'])