function heartDelivery(input) {
    let neighborhood = input
    .shift()
    .split('@')
    .map(Number);
    let command = input.shift();
    let currentLine = 0;

    while (command !== 'Love!') {
        let line = command.split(' ');
        let jumpLength = Number(line[1]);

        currentLine += jumpLength;

        if (currentLine >= neighborhood.length) {
            currentLine = 0;
        }
        if (neighborhood[currentLine] === 0) {
            console.log(`Place ${currentLine} already had Valentine's day.`);
        } else {
            neighborhood[currentLine] -= 2;
            if (neighborhood[currentLine] === 0) {
                console.log(`Place ${currentLine} has Valentine's day.`);
            }
        }
        command = input.shift();
    }
    console.log(`Cupid's last position was ${currentLine}.`);

    let isTrue = true;
    let count = 0;

    for (let num of neighborhood) {
        if (num !== 0) {
            isTrue = false;
            count++;
        }
    }
    if (isTrue) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${count} places.`);
    }

}

heartDelivery
    (["10@10@10@2",

        "Jump 1",

        "Jump 2",

        "Love!"])