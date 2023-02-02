function tickets (arr, sortCriterion) {

    class Ticket {
        constructor (destination, price, status) {
            this.destination = destination,
            this.price = price,
            this.status = status
        }
    }

    let result = [];

    arr.forEach(line => {
        let[destination, price, status] = line.split('|');
        let newTicket = new Ticket(destination, Number(price), status);
        result.push(newTicket);
    });

    if(sortCriterion === 'destination') {
        result.sort((a,b) => a.destination.localeCompare(b.destination))
    } else if (sortCriterion === 'price') {
        result.sort((a,b) => a.price - b.price);
    } else if (sortCriterion === 'status') {
        result.sort((a,b) => a.status.localeCompare(b.status))
    }
    return result;
}
tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price');
