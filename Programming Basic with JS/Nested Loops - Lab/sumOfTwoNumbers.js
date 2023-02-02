function sumOfTwoNumbers(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);

    let count = 0;
    let sum = 0;
    let isFound = false;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            let comb = `${i} ${j}`;
            count++;
            sum = i + j;
            if (sum === magic) {
                console.log(`Combination N:${count} (${i} + ${j} = ${magic})`);
                isFound = true;
                break;
            }
        } if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${count} combinations - neither equals ${magic}`)
    }
}
sumOfTwoNumbers(["1", "10", "5"]);
