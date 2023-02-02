function worldSwimmingRecord (input) {

    let recordInSec = Number(input[0]);
    let distance = Number(input[1]);
    let timeInSecForOneMeter = Number(input[2]);

    let ivanTime = distance * timeInSecForOneMeter;
    let time = Math.floor(distance / 15) * 12.5;
    let totalTime = ivanTime + time;

    if (totalTime < recordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - recordInSec).toFixed(2)} seconds slower.`)
    }
} worldSwimmingRecord (["55555.67",
"3017","5.03"])


// ((["10464",
// "1500",
// "20"])
// )