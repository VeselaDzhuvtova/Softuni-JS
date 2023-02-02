function sumNumbersNM(first, second) {

    let sum = 0;
    let n = Number(first);
    let m = Number(second);

    for(let i = n; i <= m; i++) {
        sum += i;
    }
    console.log(sum)
}
sumNumbersNM('1', '5')