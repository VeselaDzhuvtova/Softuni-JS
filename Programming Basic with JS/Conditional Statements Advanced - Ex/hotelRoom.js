function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    
    let studioPrice = 0;
    let appartPrice = 0;
    switch(month) {
        case "May":
        case "October":
                studioPrice = nights * 50;
                appartPrice = nights * 65;
                if (nights > 7 && nights <= 14) {
                    studioPrice = studioPrice * 0.95;
                } else if (nights > 14) {
                    studioPrice = studioPrice * 0.7;
                if (nights > 14) {
                    appartPrice = appartPrice * 0.9;
                }
            }
            break;
        case "June":
        case "September":
                studioPrice = nights * 75.20;
                appartPrice = nights * 68.70;
                if (nights > 14) {
                studioPrice = studioPrice * 0.8;
                appartPrice = appartPrice * 0.9;
        }
            break;
        case "July":
        case "August":
                studioPrice = nights * 76;
                appartPrice = nights * 77;
                if (nights > 14) {
                    appartPrice = appartPrice * 0.9;
                }
            
            break;
    }
    console.log(`Apartment: ${(appartPrice.toFixed(2))} lv.`)
    console.log(`Studio: ${(studioPrice.toFixed(2))} lv.`)
}
hotelRoom (["May",
"15"])
