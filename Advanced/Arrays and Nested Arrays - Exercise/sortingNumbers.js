function sortingNumbers(array) {

    const arrayOfNums = array;
    const sortedNums = arrayOfNums.sort((a, b) => a - b);
    const sortedNumsL = sortedNums.length;
    const result = [];

    for (let i = 0; i < sortedNumsL; i++) {
        let first = sortedNums.shift();
        let last = sortedNums.pop();
        if (result.length === sortedNumsL) {
            break;
        }
        result.push(first, last);
    }
    return result;
}