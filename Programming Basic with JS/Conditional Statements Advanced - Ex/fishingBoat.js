function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let count = Number(input[2]);

    let priceToShip = 0;
    switch (season) {
        case "Spring":
            priceToShip = 3000;
            break;
        case "Summer":
            priceToShip = 4200;
            break;
        case "Autumn":
            priceToShip = 4200;
            break;
        case "Winter":
            priceToShip = 2600;
            break;
    }
    if (count <= 6) {
        priceToShip = priceToShip * 0.9;
    } else if (count <= 11) {
        priceToShip = priceToShip * 0.85;
    } else if (count >= 12) {
        priceToShip = priceToShip * 0.75;
    }
    if (count % 2 === 0 && season != "Autumn") {
        priceToShip = priceToShip * 0.95;
    }
    let result = Math.abs(budget - priceToShip);
    if (budget >= priceToShip) {
        console.log(`Yes! You have ${result.toFixed(2)} leva left.`)
    } else if (budget < priceToShip) {
        console.log(`Not enough money! You need ${result.toFixed(2)} leva.`);
    }
}
fishingBoat((["3000",
    "Summer",
    "11"])
)