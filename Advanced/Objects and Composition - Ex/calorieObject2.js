function calorieObject2 (arr) {

    let obj = {};

    while (arr.length !== 0) {
        let product = arr.shift();
        let calories = arr.shift();
        obj[product] = Number(calories);
    }
    console.log(obj)
}
calorieObject2(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])