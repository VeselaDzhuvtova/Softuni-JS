function sumOfNumbersNM (n, m) {

    let first = Number(n);
    let second = Number(m);
    let result = 0;

    for (let i = first; i <= second; i++) {
        result+= i;
    }
    return result;
}
sumOfNumbersNM ('1', '5')