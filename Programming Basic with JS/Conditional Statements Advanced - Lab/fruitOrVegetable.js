function fruitOrVegetable(input) {

    let product = input[0];

    let fruitOfVeg = '';

    switch (product) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
            fruitOfVeg = 'fruit';
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot':
            fruitOfVeg = 'vegetable';
            break;
        default:
            fruitOfVeg = 'unknown';
    }
    console.log(fruitOfVeg)
}
fruitOrVegetable(['banana'])