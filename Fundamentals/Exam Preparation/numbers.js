function numbers(input) {

    let num = input.split(' ').sort((a, b) => a - b).reverse().map(Number);
    let numLength = num.length;
    let max = [];
    let sumNums = num.reduce((a, b) => a + b, 0);
    let averege = sumNums / numLength;
    let sequence = [];
    sequence = num.filter(x => x > averege);
    max = sequence.splice(0, 5);
    if (max.length <= 0) {
        console.log('No');
    }
    console.log(max.join(' '));
}
numbers('10 20 30 40 50');