function storeCatalogue(input) {

    const catalog = {};
    const alphabeticalOrder = [];
    const sortedProduct = input.sort((a, b) => a.localeCompare(b));

    for (let line of sortedProduct) {

        let [product, price] = line.split(' : ');
        price = Number(price);
        let letter = product[0];
        catalog[product] = price;

        if (!alphabeticalOrder.includes(letter)) {
            alphabeticalOrder.push(letter);
        }
    }

    for (let letter of alphabeticalOrder) {
        console.log(letter);
        for (let product in catalog) {
            let fisrtsLetter = product[0];
            if (fisrtsLetter === letter) {
                console.log(`  ${product}: ${catalog[product]}`);
            }
        }
    }
}
storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
