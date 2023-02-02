function sumFirstAndLast (arr) {

let nums = arr.shift().split(', ');
let firstNum = Number(nums.shift());
let lastNum = Number(arr.pop());
let sum = firstNum + lastNum;
console.log(sum)
}
sumFirstAndLast (['20', '30', '40'])