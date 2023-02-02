function godzillaVsKong (input) {

    let budget = input[0];
    let actors = input[1];
    let priceOfClothes = input[2];

    let decore = budget * 0.1;
    let actorsClothes = actors * priceOfClothes;

    if (actors > 150) {
        actorsClothes = actorsClothes * 0.9;
    }
    let totalPrice = decore + actorsClothes;
    
    if (budget >= totalPrice) {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`)
    } else {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`);
    }
} godzillaVsKong (["20000",
"120",
"55.5"])
