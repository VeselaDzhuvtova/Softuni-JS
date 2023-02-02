function coins(input){
    let index = 0;
    let sum = Number(input[index]);
    let sumInCoins = sum * 100;
    let countCoins = 0;

    while (true) {

        if (sumInCoins >= 200) {
            countCoins++;
            sumInCoins = sumInCoins - 200;
        } else if (sumInCoins >= 100) {
            countCoins++;
            sumInCoins = sumInCoins - 100;
        } else if (sumInCoins >= 50) {
            countCoins++;
            sumInCoins = sumInCoins - 50;
        } else if (sumInCoins >= 20) {
            countCoins++;
            sumInCoins = sumInCoins - 20;
        } else if (sumInCoins >= 10) {
            countCoins++;
            sumInCoins = sumInCoins - 10;
        } else if (sumInCoins >= 5) {
            countCoins++;
            sumInCoins = sumInCoins - 5;
        } else if (sumInCoins >= 2) {
            countCoins++;
            sumInCoins = sumInCoins - 2;
        } else if (sumInCoins >= 1) {
            countCoins++;
            sumInCoins = sumInCoins - 1;
        } else {
            break;
        }
    }
    console.log(countCoins);
}