function processOddPositions(arr) {

    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            newArr.push(arr[i]);
        }
    }
    let result = newArr.map(n => n * 2);
    result.reverse();
    let finish = result.join(' ');
    console.log(finish);
}
processOddPositions([10, 15, 20, 25])