function lowestPrice(data) {
    let myObject = {}
    for (let elem of data) {
        let [town, product, price] = elem.split(' | ');
        price = Number(price);
        if (myObject.hasOwnProperty(product)) {
            let [price1, town1] = myObject[product];
            if (price < price1) {
                myObject[product] = [price, town]
            }
        }
        else {
            myObject[product] = [price, town]
        }
    }
    for (let [nameProduct, arr] of Object.entries(myObject)) {
        console.log(`${nameProduct} -> ${arr[0]} (${arr[1]})`)
    }
}

lowestPrice (['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])