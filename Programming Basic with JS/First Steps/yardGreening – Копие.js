function yardGreening (input) {
    let m2 = Number(input[0]);
    let priceM2 = 7.61;
    let totalPrice = m2 * priceM2;
    let discount = totalPrice * 0.18;
    let priceWithDiscount = (m2 * priceM2) - discount;
    console.log(`The final price is: ${priceWithDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`)
} yardGreening (["550"])