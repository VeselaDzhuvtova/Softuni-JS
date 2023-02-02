function vacation(input) {

    let index = 0;
    let priceVacation = Number(input[index]);
    index++;
    let moneyOnHand = Number(input[index]);
    index++;

    let countDays = 0;
    let totalSum = moneyOnHand;

    while (totalSum < priceVacation) {
        countDays++;
        let spendOrSave = input[index];
        index++;
        let sumSpendOrSave = Number(input[index]);
        index++;

        if (spendOrSave === "spend") {
            totalSum = totalSum - sumSpendOrSave;
            if (sumSpendOrSave >= moneyOnHand) {
                totalSum = 0;
            }
        } else if (spendOrSave === "save") {
            totalSum = totalSum + sumSpendOrSave;
        }
    }
    if (countDays === 5 && totalSum < priceVacation) {
        console.log("You can't save the money.");
        console.log(`${countDays}`);
        return;
    }
    if (totalSum >= priceVacation) {
        console.log(`You saved the money for ${countDays} days.`)
    }
}