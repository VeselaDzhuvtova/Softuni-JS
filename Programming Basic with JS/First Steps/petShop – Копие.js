function petShop (input) {
    let dogsFood = input[0];
    let catsFood = input[1];
    let packDogs = 2.5;
    let packCats = 4;
    let result = (packCats * catsFood) + (dogsFood * packDogs);
    console.log(`${result} lv.`)

} petShop(["5 ","4 "])