function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);
    let beforeOrAfter;
    let minutes = 0;
    let hours = 0;
    let isOnTime;
 
    let examInMinutes = examHour * 60 + examMinutes;
    let arrivalInMinutes = arrivalHour * 60 + arrivalMinutes;
    minutes = examInMinutes - arrivalInMinutes;
 
    if (minutes < 0) {
        beforeOrAfter = "after";
        minutes = minutes * -1;
        isOnTime = "Late";
    } else {
        beforeOrAfter = "before";
        if (minutes <= 30) {
            isOnTime = "On time";
        } else {
            isOnTime = "Early";
        }
    }
 
    console.log(isOnTime);
 
    if (minutes > 0 && minutes <= 59) {
        console.log(`${minutes} minutes ${beforeOrAfter} the start`)
    } else if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
        if (minutes < 10) {
            console.log(`${hours}:0${minutes} hours ${beforeOrAfter} the start`);
        } else {
            console.log(`${hours}:${minutes} hours ${beforeOrAfter} the start`);
        }
    }
}
onTimeForTheExam(["9",
"30",
"9",
"50"])
