function depositCalculator (input) {

    let depositSum = Number(input[0]);
    let termInMonths = Number(input[1]);
    let interestRate = Number(input[2]);
    let rate = depositSum * (interestRate / 100);
    let rateForMonth = rate / 12;
    let sum = depositSum + (termInMonths * rateForMonth);
    console.log(sum)
}
depositCalculator (["200 ","3 ","5.7 "])