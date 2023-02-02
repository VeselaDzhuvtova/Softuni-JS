function aggregateElements(arr) {

    let sumAllElements = function (nums) {
        nums = nums.reduce((a, b) => a + b, 0);
        return nums;
    }
    let inverse = function (nums) {
        let sum = 0;
        nums.forEach(num => {
            sum += 1 / num;
        });
        return sum;
    }
    let concat = function (nums) {
        let numsAsString = nums.map(String);
        numsAsString = numsAsString.reduce((a, b) => a + b);
        return numsAsString;
    }
    const sum = sumAllElements(arr);
    const inv = inverse(arr);
    const concatNums = concat(arr);
    console.log(sum);
    console.log(inv);
    console.log(concatNums);
} aggregateElements([1, 2, 3])