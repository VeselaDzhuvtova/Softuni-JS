function theImitationGame (input) {

    let arr = input.slice();
    let message = arr.shift();
    let tempMessage = '';
    
    let instructions = arr.shift();

    while (instructions != 'Decode') {
        
        let commands = instructions.split('|');
        let command = commands[0];
        switch (command) {
            case 'ChangeAll':
                let letter = commands[1];
                let newLetter = commands[2];
                while (message.includes(letter)){
                tempMessage = message.replace(letter, newLetter);
                message = tempMessage;
            }
                break;
            case 'Move':
                let numOfLetters = Number(commands[1]);
                let lettersToMove = message.substring(0, numOfLetters);
                tempMessage = message.replace(lettersToMove, '');
                tempMessage += lettersToMove;
                message = tempMessage;
                break;
            case 'Insert':
                let index = Number(commands[1]);
                let value = commands[2];

                tempMessage = message.split('');//2
                tempMessage.splice(index, 0, value);//o
                message = tempMessage.join('');//zzoHe
                break;
        }
        instructions = arr.shift();
    }
    console.log(tempMessage)
}
theImitationGame ([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ])