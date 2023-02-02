function manOWar(input) {
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(x => Number(x));
    let maxHealth = Number(input.shift());

    while (input[0] !== 'Retire') {
        let line = input.shift().split(' ');
        let command = line.shift();

        if (command === 'Fire') {
            let index = Number(line[0]);
            let damage = Number(line[1]);
            if (index >= 0 && index <= warShip.length - 1) {
                warShip[index] -= damage;
                if (warShip[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
        } else if (command === 'Defend') {
            let startIndex = Number(line[0]);
            let endIndex = Number(line[1]);
            let damage = Number(line[2]);
            if (startIndex >= 0 && startIndex <= pirateShip.length - 1 && endIndex >= 0 && endIndex <= pirateShip.length - 1) {
                for (let i = endIndex; i >= startIndex; i--) {
                    pirateShip[i] -= damage;
                    if (pirateShip[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
        } else if (command === 'Repair') {
            let index = Number(line[0]);
            let health = Number(line[1]);
            if (index >= 0 && index <= pirateShip.length - 1) {
                pirateShip[index] += health;
                if (pirateShip[index] > maxHealth) {
                    pirateShip[index] = maxHealth;
                }
            }
        } else if (command === 'Status') {
            let count = 0;
            let healthPerc = maxHealth * 0.2;
            for (let i = 0; i < pirateShip.length; i++) {
                let currentShip = pirateShip[i];
                if (currentShip < healthPerc) {
                    count++;
                }
            }
            console.log(`${count} sections need repair.`);
        }
    }
    let pirateShipSum = pirateShip.reduce((a, b) => a + b, 0);
    let warShipSum = warShip.reduce((a, b) => a + b, 0);
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
}
manOWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"]);