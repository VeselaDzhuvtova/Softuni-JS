function lunchBreak (input) {

    let movieName = input[0];
    let lengthToMovie = Number(input[1]);
    let lengthToBreak = Number(input[2]);

    let timeToLunch = lengthToBreak / 8;
    let otherTime = lengthToBreak / 4;
    let time = lengthToBreak - timeToLunch - otherTime;

    if (lengthToMovie <= time) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(time - lengthToMovie)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(lengthToMovie - time)} more minutes.`)
    }
}
lunchBreak (["Teen Wolf",
"48",
"60"])

// (["Game of Thrones",
// "60",
// "96"])
