function sleepyTomCat (input) {

    let daysOff = Number(input[0]);

    let year = 365;
    let workingDays = year - daysOff;
    let norm = 30000;

    let play = (daysOff * 127) + (workingDays * 63);
    let playInHours = play % 60;
    let minutes = 0;
    console.log(playInHours)

    if (play >= norm) {
        ('Tom will run away');
        console.log(`${playInHours} hours and ${minutes} minutes more for play`)
    }

}
sleepyTomCat (['20'])