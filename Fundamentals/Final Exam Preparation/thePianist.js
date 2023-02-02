function thePianist(input) {

    let numOfPieces = Number(input.shift());
    let listOfSongs = [];
    let songs = [];

    for (let i = 0; i < numOfPieces; i++) {
        for (let j = input[i]; j <= input[i]; j++) {
            let song = input.shift();
            listOfSongs.push(song);
        }
    }
    listOfSongs.forEach(line => {
        let [name, singer, items] = line.split('|')
        let currentSong = {
            name,
            singer,
            items,
        }
        songs.push(currentSong);
    });

    let instructions = input.shift().split(', ');

    while (instructions !== 'Stop') {
        let line = instructions.shift().split('|');

        let command = line.shift();

        switch (command) {
            case 'Add':

                if (!songs.includes(line)) {
                    let songOfLine = line[0];
                    let singerOfLine = line[1];
                    let itemsOfLine = line[2];
                    console.log(`${songOfLine} by ${singerOfLine} in ${itemsOfLine} added to the collection!`)
                } else {
                    console.log(`${line} is already in the collection!`)
                }
                break;
            case 'Remove':
                if (songs.includes(line)) {
                    console.log(`Successfully removed ${line}!`)
                } else if (!songs.includes(line)) {
                    console.log(`Invalid operation! ${line} does not exist in the collection.`)
                }
                break;
            case 'ChangeKey':

                break;
        }

        instructions = input.shift().split(', ');
    }
    console.log(songs.join());
}
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])