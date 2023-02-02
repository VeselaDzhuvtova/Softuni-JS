function fruits (typeOfFruits, grams, kgPrice) {

    let inKg = Number(grams / 1000);
    
    let price = (inKg * kgPrice).toFixed(2);

    console.log(`I need $${price} to buy ${inKg.toFixed(2)} kilograms ${typeOfFruits}.`)
}
fruits('orange', 2500, 1.80)
fruits('apple', 1563, 2.35)