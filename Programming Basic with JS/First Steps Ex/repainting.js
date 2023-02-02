function repainting (input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let dilute = Number(input[2]);
    let workHour = Number(input[3]);

    let bonusNylon = 2;
    let bonusPaint = paint * 0.1;
    let bags = 0.40;

    let nylonSum = (nylon + bonusNylon) * 1.5;
    let paintSum = (paint + bonusPaint) * 14.50;
    let diluteSum = dilute * 5;

    let materials = nylonSum + paintSum + diluteSum + bags;
    let work = (materials * 0.30) * workHour;
    let totalSum = work + materials;
    console.log(totalSum)

}
repainting (["10 ","11 ","4 ","8 "])