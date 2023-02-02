function toyShop (input) {

    let holiday = Number(input[0]);
    let numOfPuzzles = Number(input[1]);
    let numOfDolls = Number(input[2]);
    let numOfBears = Number(input[3]);
    let numOfMinions = Number(input[4]);
    let numOfTrucks = Number(input[5]);

    let priceOfPuzzle = numOfPuzzles * 2.60;
    let priceOfDolls = numOfDolls * 3;
    let priceOfBears = numOfBears * 4.10;
    let priceOfMinions = numOfMinions * 8.20;
    let priceOfTrucks = numOfTrucks * 2;

    let countOfToys = numOfBears + numOfDolls + numOfMinions + numOfPuzzles + numOfTrucks;
    let priceOfToys = priceOfBears + priceOfDolls + priceOfMinions + priceOfPuzzle + priceOfTrucks;
    if (countOfToys >= 50) {
        priceOfToys = priceOfToys * 0.75;
    }
    let totalPrice = priceOfToys * 0.9;

    if (holiday > totalPrice) {
        console.log(`Not enough money! ${(holiday - totalPrice).toFixed(2)} lv needed.`);
    } else {
        console.log(`Yes! ${(totalPrice - holiday).toFixed(2)} lv left.`)
    }

} toyShop (["40.8",
"20",
"25",
"30",
"50",
"10"])
