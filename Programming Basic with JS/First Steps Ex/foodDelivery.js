function foodDelivery (input) {

    let countChickenMenu = input[0];
    let countFishMenu = input[1];
    let countVegetarianMenu = input[2];

    let delivery = 2.5;

    let priceChickenMenu = countChickenMenu * 10.35;
    let priceFishMenu = countFishMenu * 12.40;
    let priceVegetarianMenu = countVegetarianMenu * 8.15;

    let priceForMenu = priceChickenMenu + priceFishMenu + priceVegetarianMenu;

    let dessert = priceForMenu * 0.2;
    let totalSum = priceForMenu + dessert + delivery;
    console.log(totalSum)
}
foodDelivery(["2 ","4 ","3 "])