function cardGame(input) {

    let points = {
        '1': 10,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }
    let pointsFromPaint = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }
    let gameResult = {};
    for (let lines of input) {
        let [namePayers, cards] = lines.split(': ');
        cards = cards.split(', ');
        if (!gameResult.hasOwnProperty(namePayers)) {
            gameResult[namePayers] = new Set();
        }
        for (let card of cards) {
            gameResult[namePayers].add(card);
        }
    }
    let entries = Object.entries(gameResult);
    for (let [name, cards] of entries) {
        let cardPower = 0;
        for (let card of cards) {
            let cardPoints = points[card[0]];
            let cardPaint = pointsFromPaint[card.slice(-1)];
            cardPower += cardPoints * cardPaint;
        }
        console.log(`${name}: ${cardPower}`);
    }
}