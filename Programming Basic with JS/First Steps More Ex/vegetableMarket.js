function vegetableMarket (input) {

    let kgVegetablesPrice = Number(input[0]);
    let kgFruitPrice = Number(input[1]);
    let kgVeg = Number(input[2]);
    let kgFruits = Number(input[3]);

    let sum = (kgFruitPrice * kgFruits) + (kgVeg * kgVegetablesPrice);
    let euro = sum / 1.94
    console.log(euro.toFixed(2));
}
vegetableMarket ([0.194, 19.4, 10, 10])