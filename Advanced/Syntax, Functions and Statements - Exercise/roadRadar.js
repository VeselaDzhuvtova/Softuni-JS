function roadRadar (speed, zone) {

    let limit = 0;
    let status = '';


    switch (zone) {
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;
    }
    let diff = speed - limit;
    let over = 0;
    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    } else if (speed <= limit + 20) {
        status = 'speeding';
    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`)
    } else if (speed <= limit + 40){
        status = 'excessive speeding';
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`)
    } else {
        status = 'reckless driving';
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`)

    }
}
roadRadar (40, 'city');
console.log('---------------');
roadRadar(21, 'residential');