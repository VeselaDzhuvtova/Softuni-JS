function shopping (input) {

    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let priceVideocards = videocards * 250;
    let priceProcessors = processors * (priceVideocards * 0.35);
    let priceRam = ram * (priceVideocards * 0.10);

    let totalPrice = priceProcessors + priceRam + priceVideocards;

    if (videocards > processors) {
        totalPrice = totalPrice * 0.85;
    }
    if (budget >= totalPrice) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}
shopping (["900",
"2",
"1",
"3"])
