function tradeCommissions (input) {

    let town = input[0];
    let sum = Number(input[1]);

    let commission = 0;

    switch (town) {
        case 'Sofia':
        if (sum > 0 && sum <= 500) {
            commission = sum * 5/100;
            console.log(commission.toFixed(2))
        } else if (sum > 500 && sum <= 1000) {
            commission = sum * 7/100;
            console.log(commission.toFixed(2))
        } else if (sum > 1000 && sum <= 10000) {
            commission = sum * 8/100;
            console.log(commission.toFixed(2))
        } else if (sum > 10000) {
            commission = sum * 12/100;
            console.log(commission.toFixed(2))
        } else {
            console.log('error')
        }
        break;
        case 'Plovdiv':
            if (sum > 0 && sum <= 500) {
                commission = sum * 5.5/100;
                console.log(commission.toFixed(2))
            } else if (sum > 500 && sum <= 1000) {
                commission = sum * 8/100;
                console.log(commission.toFixed(2))
            } else if (sum > 1000 && sum <= 10000) {
                commission = sum * 12/100;
                console.log(commission.toFixed(2))
            } else if (sum > 10000) {
                commission = sum * 14.5/100;
                console.log(commission.toFixed(2))
            } else {
                console.log('error')
            }
        break;
        case 'Varna':
            if (sum > 0 && sum <= 500) {
                commission = sum * 4.5/100;
                console.log(commission.toFixed(2))
            } else if (sum > 500 && sum <= 1000) {
                commission = sum * 7.5/100;
                console.log(commission.toFixed(2))
            } else if (sum > 1000 && sum <= 10000) {
                commission = sum * 10/100;
                console.log(commission.toFixed(2))
            } else if (sum > 10000) {
                commission = sum * 13/100;
                console.log(commission.toFixed(2))
            } else {
                console.log('error')
            }
        break;
        default:
            console.log('error')
    }
}


tradeCommissions (['Plovdiv', '499.99'])