function bombNumbers(array, bomb) {

    let bombNumber = bomb[0];
    let bombRadius = bomb[1];

    let indexOfBomb = array.indexOf(bombNumber);
    while (indexOfBomb !== -1) {
        let startIndex = Math.max(0, indexOfBomb - bombRadius);
        let explosionL = bombRadius * 2 + 1;
        array.splice(startIndex, explosionL);
        indexOfBomb = array.indexOf(bombNumber);
    }
    let sum = array.reduce((a, b) => a + b, 0);
    console.log(sum);
}