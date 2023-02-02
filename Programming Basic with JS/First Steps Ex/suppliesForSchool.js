function suppliesForSchool (input) {

    let pensPack = Number(input[0]);
    let markersPack = Number(input[1]);
    let litersPreparation = Number(input[2]);
    let discount = Number(input[3]);

    let priceForPackPens = 5.8;
    let priceForPackMarkers = 7.2;
    let preparationPrice = 1.2;

    let sumPens = pensPack * priceForPackPens;
    let sumMarkers = markersPack * priceForPackMarkers;
    let sumPreparation = litersPreparation * preparationPrice;
    let discountInPercentage = discount / 100;

    let totalSum = sumMarkers + sumPens + sumPreparation;
    let disc = totalSum - (totalSum * discountInPercentage);
    console.log(disc);
}
suppliesForSchool (["2 ","3 ","4 ","25 "])