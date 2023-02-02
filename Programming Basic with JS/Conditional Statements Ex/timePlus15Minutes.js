function timePlus15Minutes (input) {

    let hour = Number(input[0]);
    let mins = Number(input[1]);

    let timeInMin = (hour * 60) + mins;
    let timePlus = timeInMin + 15;

    let hours = Math.floor(timePlus / 60);
    let minutes = timePlus % 60;

    if (hours > 23) {
        hours = 0;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`)
    }
}
timePlus15Minutes (["1", "46"]);