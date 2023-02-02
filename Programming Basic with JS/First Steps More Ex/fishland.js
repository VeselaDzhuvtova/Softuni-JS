function fishland(input) {

    let mackerelPrice = Number(input[0]);//скумрия
    let sprinklePrice = Number(input[1]);//цаца
    let bonitoKg = Number(input[2]);//паламуд
    let safridKg = Number(input[3]);//сафрид
    let musselsKg = Number(input[4]);//миди

    let bonitoPrice = mackerelPrice * 1.6;
    let safridPrice = sprinklePrice * 1.8;
    let musselsPrice = 7.5;

    let bonito = bonitoKg * bonitoPrice;
    let safrid = safridKg * safridPrice;
    let mussels = musselsKg * musselsPrice;

    let sum = bonito + safrid + mussels;

    console.log(sum.toFixed(2));
}
fishland([6.9, 4.2, 1.5, 2.5, 1])