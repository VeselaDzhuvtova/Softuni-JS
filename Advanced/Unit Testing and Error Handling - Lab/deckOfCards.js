function deckOfCards(cards) {

    let result = [];

    for (let cardAsString of cards) {
        const face = cardAsString.slice(0, -1);
        const suit = cardAsString.slice(-1);

        try {
           const card = createCard(face, suit);
           result.push(card);
        } catch (err) {
            result = ['Invalid card: ' + cardAsString]
        }
    }
    console.log(result.join(' '));

    function playingCards(face, suit) {

    }

}
deckOfCards(['AS', '10D', 'KH', '2C'])