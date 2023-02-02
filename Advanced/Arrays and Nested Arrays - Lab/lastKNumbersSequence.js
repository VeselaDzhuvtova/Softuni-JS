function lastKNumbersSequence (n, k) {

    let first = [1];

    for (let i = 1; i < n; i++) {
        let lastK = first.slice(-k);
        let sum = 0;

        for (let num of lastK) {
            sum += Number(num);
        }
        first.push(sum);
    }
    return first;
}
lastKNumbersSequence(6, 3)