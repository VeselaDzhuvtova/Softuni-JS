function newHouse (input) {

    let type = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch (type) {
        case 'Roses':
        price = quantity * 5;
        break;
        case 'Dahlias':
        price = quantity * 3.80;
        break;
        case 'Tulips':
        price = quantity * 2.80;
        break;
        case 'Narcissus':
        price = quantity * 3;
        break;
        case 'Gladiolus':
        price = quantity * 2.50
        break;
    }
    if (type === 'Roses' && quantity > 80) {
        price = price * 0.9;
    }
    if (type === 'Dahlias' && quantity > 90) {
        price = price * 0.85;
    }
    if (type === 'Tulips' && quantity > 80) {
        price = price * 0.85;
    }
    if (type === 'Narcissus' && quantity < 120) {
        price = price * 1.15;
    }
    if (type === 'Gladiolus' && quantity < 80) {
        price = price * 1.2;
    }
    
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${quantity} ${type} and ${(budget - price).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
    }
}
newHouse((["Roses",
"55",
"250"])
)