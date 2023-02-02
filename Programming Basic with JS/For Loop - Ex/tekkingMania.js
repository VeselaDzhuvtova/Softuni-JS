function tekkingMania(input){
    let countOfGroups = Number(input[0]);

    let musalaGroup = 0;
    let monblandGroup = 0;
    let kilimandzharoGroup = 0;
    let k2Group = 0;
    let everestGroup = 0;
    let totalPeople = 0;

    for (let i = 1; i <= countOfGroups; i++) {
        let peopleInGroup = Number(input[i]);
        totalPeople = totalPeople + peopleInGroup;

        if (peopleInGroup <= 5) {
            musalaGroup = musalaGroup + peopleInGroup;
        } else if(peopleInGroup >=6 && peopleInGroup<=12) {
            monblandGroup = monblandGroup + peopleInGroup;
        } else if(peopleInGroup >=13 && peopleInGroup <= 25){
            kilimandzharoGroup = kilimandzharoGroup + peopleInGroup;
        } else if (peopleInGroup >= 26 && peopleInGroup <= 40) {
            k2Group = k2Group + peopleInGroup;
        } else if (peopleInGroup >=41) {
            everestGroup = everestGroup + peopleInGroup;
        }
    }
    console.log(`${(musalaGroup / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(monblandGroup / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimandzharoGroup / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2Group / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everestGroup / totalPeople * 100).toFixed(2)}%`);

}