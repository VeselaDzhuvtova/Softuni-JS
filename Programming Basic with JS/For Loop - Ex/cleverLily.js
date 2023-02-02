function cleverLily(input) {
    let ageLily = Number(input[0]);
    let washmashinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let countMoney = 0;
    let countToys = 0;
    let money = 0;

    for (let i = 1; i <= ageLily; i++) {
        if (i % 2 === 0) {
            countMoney++;
        } else {
            countToys++;
        }
    }
    for (let i = 0; i <= countMoney; i++) {
        money += 10 * i;
    }
    money += (countToys * toyPrice) - countMoney;
    let diff = Math.abs(money - washmashinePrice);
    if (money >= washmashinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`)
    } else if (washmashinePrice >= money) {
        console.log(`No! ${diff.toFixed(2)}`)
    }
}