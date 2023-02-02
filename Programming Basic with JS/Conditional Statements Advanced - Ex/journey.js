function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let type = "";
    let price = 0;

    switch (season) {
        case "summer":
            if (budget <= 100) {
                destination = "Bulgaria";
                type = "Camp";
                price = budget * 0.3;
            } else if (budget <= 1000) {
                destination = "Balkans";
                type = "Camp";
                price = budget * 0.4;
            } else if (budget > 1000) {
                destination = "Europe";
                type = "Hotel";
                price = budget * 0.9;
            }
            break;
        case "winter":
            if (budget <= 100) {
                destination = "Bulgaria";
                type = "Hotel";
                price = budget * 0.7;
            } else if (budget <= 1000) {
                destination = "Balkans";
                type = "Hotel";
                price = budget * 0.8;
            } else if (budget > 1000) {
                destination = "Europe";
                type = "Hotel";
                price = budget * 0.9;
            }
            break;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);
}
journey (['50', 'summer'])