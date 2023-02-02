function trainingLab (input) {

    let w = Number(input[0]);
    let h = Number(input[1]);

    let tables = Math.floor(((h * 100) - 100) / 70);
    let rows = Math.floor((w * 100) / 120);

    let places = (rows * tables) - 3;

    console.log(places)
}
trainingLab ([15, 8.9])