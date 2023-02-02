function weatherForecastPart2 (input) {

    let degrees = Number(input[0]);
    let weather = '';

    if (degrees >=5 && degrees <= 11.9) {
        weather = 'Cold';
    } else if (degrees >=12 && degrees <= 14.9) {
        weather = 'Cool';
    } else if (degrees >=15 && degrees <= 20) {
        weather = 'Mild';
    } else if (degrees >=20.1 && degrees <= 25.9) {
        weather = 'Warm';
    } else if (degrees >=26 && degrees <= 35) {
        weather = 'Hot';
    } else {
        weather = 'unknown'
    }
    console.log(weather)
} weatherForecastPart2 ([16.5])