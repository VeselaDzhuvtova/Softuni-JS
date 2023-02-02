function cinema(input) {

    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let places = rows * columns;
    let price = 0;

    switch (type) {
        case 'Premiere':
            price = places * 12;
            break;
        case 'Normal':
            price = places * 7.50;
            break;
        case 'Discount':
            price = places * 5;
    }
    console.log(`${price.toFixed(2)} leva`)
}
cinema(["Premiere", "10", "12"])
