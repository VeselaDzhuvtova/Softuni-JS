function areaOfFigures(input) {

    let figure = input[0];
    let a = input[1];
    let b = input[2];
    let face = 0;

    if (figure === 'square') {
        face = a * a
    } else if (figure === 'rectangle') {
        face = a * b;
    } else if (figure === 'circle') {
        face = Math.PI * (a * a);
    } else if (figure === 'triangle') {
        face = (a * b) / 2;
    }
    console.log(face)
}
areaOfFigures((["square", "5"]))