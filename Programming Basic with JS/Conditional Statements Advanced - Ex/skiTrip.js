function skiTrip(input) {
    let days = Number(input[0]);
    let type = input[1];
    let evaluation = input[2];

    let nights = days - 1;
    let price = 0;

    switch (type) {
        case "room for one person":
            price = nights * 18;
            break;
        case "apartment":
            price = nights * 25;
            if (nights < 10) {
                price = price * 0.7;
            } else if (nights > 10 && nights <= 15) {
                price = price * 0.65;
            } else if (nights > 15) {
                price = price * 0.5;
            }
            break;
        case "president apartment":
            price = nights * 35;
            if (nights < 10) {
                price = price * 0.9;
            } else if (nights > 10 && nights <= 15) {
                price = price * 0.85;
            } else if (nights > 15) {
                price = price * 0.8;
            }
            break;
    }
    if (evaluation == "positive") {
        price = price + (price * 0.25);
    } else if (evaluation == "negative") {
        price = price * 0.9;
    }
    console.log(price.toFixed(2));
}
skiTrip(["14",
"apartment",
"positive"])
