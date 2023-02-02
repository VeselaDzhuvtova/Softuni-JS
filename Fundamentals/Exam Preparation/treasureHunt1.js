function treasureHunt1(input) {
    let treasure = input.shift().split('|');

    for (let num of input) {
        let lineArg = num.split(' ');
        let command = lineArg.shift();

        if (command === 'Loot') {
            for (let i = 0; i < lineArg.length; i++) {
                let currLine = lineArg[i];
                let loot = treasure.indexOf(currLine);
                if (loot < 0) {
                    treasure.unshift(currLine);
                }
            }
        }
        else if (command === 'Drop') {
            let drop = Number(lineArg);
            if (drop >= 0 && drop < treasure.length) {
                treasure.push(treasure.splice(drop, 1));
            }
        }
        else if (command === 'Steal') {
            let count = Math.min(treasure.length, Number(lineArg.shift()));
            let steal = treasure.length - count;
            let stolenTreasure = treasure.splice(steal, count);
            console.log(stolenTreasure.join(', '));
        }
    }

    let averege = treasure.reduce((sum, item) => sum + item.length, 0) / treasure.length;

    if (treasure.length) {
        console.log(`Average treasure gain: ${averege.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }
}


treasureHunt1(["Gold|Silver|Bronze|Medallion|Cup",

    "Loot Wood Gold Coins",

    "Loot Silver Pistol",

    "Drop 3",

    "Steal 3",

    "Yohoho!"])