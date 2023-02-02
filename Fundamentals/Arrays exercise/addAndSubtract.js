function addAndSubtract(input) {

        let resultArray = [];
        let inputArraySum = 0;
        let resultArraySum = 0;
        let inputLength = input.length;
        for (let i = 0; i < inputLength; i++) {

            let currentNum = input[i];

            let odd = currentNum - i;
            let even = currentNum + i;

            if (currentNum % 2 == 0) {
                resultArray.push(even);
            } else {
                resultArray.push(odd);
            }
            inputArraySum+=currentNum;
            resultArraySum+=resultArray[i];
        }
        console.log(resultArray);
        console.log(inputArraySum);
        console.log(resultArraySum);
}
addAndSubtract([5, 15, 23, 56, 35]);
// addAndSubtract([-5, 11, 3, 0, 2])