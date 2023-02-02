function sumFirstLast (input) {

    let first = Number(input.shift());
    let last = Number(input.pop());

    let result = first + last;
    console.log(result)
}
sumFirstLast (['20', '30', '40'])