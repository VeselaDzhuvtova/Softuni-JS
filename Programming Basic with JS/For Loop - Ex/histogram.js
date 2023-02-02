function histogram(input) {
    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 1; i <= n; i++) {
        let currentNum = Number(input[i]);
        if (currentNum < 200) {
            p1 += 1;
        } else if (currentNum < 400) {
            p2 += 1;
        } else if (currentNum < 600) {
            p3 += 1;
        } else if (currentNum < 800) {
            p4 += 1;
        } else if (currentNum >= 800) {
            p5 += 1;
        }
    }

    let percentGroup1 = (p1 / n) * 100;
    let percentGroup2 = (p2 / n) * 100;
    let percentGroup3 = (p3 / n) * 100;
    let percentGroup4 = (p4 / n) * 100;
    let percentGroup5 = (p5 / n) * 100;

    console.log(`${percentGroup1.toFixed(2)}%`)
    console.log(`${percentGroup2.toFixed(2)}%`)
    console.log(`${percentGroup3.toFixed(2)}%`)
    console.log(`${percentGroup4.toFixed(2)}%`)
    console.log(`${percentGroup5.toFixed(2)}%`)
}