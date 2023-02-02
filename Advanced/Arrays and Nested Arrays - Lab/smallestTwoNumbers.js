function smallestTwoNumbers(input) {

    input.sort((a, b) => a - b);
    let result = [];

    input.splice(2);
    result = input.join(', ')
    console.log(result);
}
smallestTwoNumbers([30, 15, 50, 5])