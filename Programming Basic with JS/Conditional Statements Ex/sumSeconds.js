function sumSeconds(input) {

    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let totalTime = firstTime + secondTime + thirdTime;

    let minutes = Math.floor(totalTime / 60);
    let secundes = totalTime % 60;

    if (secundes < 10) {
        console.log(`${minutes}:0${secundes}`);
    } else {
        console.log(`${minutes}:${secundes}`)
    }
} sumSeconds(["35",
    "45",
    "44"])
