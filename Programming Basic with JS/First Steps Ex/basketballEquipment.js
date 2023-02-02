function basketballEquipment (input) {

    let yearsTax = Number(input[0]);

    let sneakers = yearsTax * 0.6;
    let team = sneakers * 0.8;
    let ball = team / 4;
    let accesoaries = ball / 5;

    let totalSum = sneakers + team + ball + accesoaries + yearsTax;
    console.log(totalSum)
}
basketballEquipment (["365"])