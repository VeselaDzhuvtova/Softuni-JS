// function extractIncreasingSubsequenceFromArray(arr) {

//     let result = [];
//     let biggestOne = arr.shift();
//     result.push(biggestOne);

//     for (el of arr) {
//         if (el >= biggestOne) {
//             result.push(el);
//             biggestOne = el;
//         }
//     }
//     return result;
// }

function extractIncreasingSubsequenceFromArray (arr) {

    let result = [];
    let biggestOne = arr[0];
    result = arr.reduce((acc, currentElement) => {
        if (biggestOne <= currentElement) {
            acc.push(currentElement);
            biggestOne = currentElement;
        }
        return acc;
    },[]);
    return result;
}
extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])