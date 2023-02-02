function actKeys(input) {

    let activationKey = input.shift();//abcdefghijklmnopqrstuvwxyz
    let instructions = input.slice();//["Flip>>>Upper>>>3>>>14",'Flip>>>Lower>>>5>>>7','Contains>>>def','Contains>>>deF','Generate']
    let currentInstruction = instructions.shift();//Slice>>>2>>>6
    // console.log(instructions)
    while (currentInstruction !== 'Generate') {
        let arguments = currentInstruction.split('>>>')//(2) ['2', '6']   ['Upper', '3', '14']    ['Lower', '5', '7']      ['def']     ['def']
        let instructionName = arguments.shift();// Slice   Flip   Flip   Contains   Contains

        switch (instructionName) {
            case 'Contains':
                let substring = arguments[0];//def   deF
                if (activationKey.includes(substring)) {
                    console.log(`${activationKey} contains ${substring}.`)
                } else {
                    console.log("Substring not found!");
                }
                break;
            case 'Flip':
                let upperOrLower = arguments[0];
                let startIndex = arguments[1];
                let endIndex = arguments[2];
                let part = activationKey.substring(startIndex, endIndex);
                if (upperOrLower === 'Upper') {
                    let change = part.toUpperCase();
                    activationKey = activationKey.replace(part, change);//замени в activationKey part с change
                    console.log(activationKey)
                } else if (upperOrLower === 'Lower') {
                    let change = part.toLowerCase();
                    activationKey = activationKey.replace(part, change);
                    console.log(activationKey);
                }
                break;
            case 'Slice':
                let startInd = arguments[0];
                let endInd = arguments[1];
                let substr = activationKey.substring(startInd, endInd);
                activationKey = activationKey.replace(substr, '');
                console.log(activationKey);
                break;
        }
        currentInstruction = instructions.shift();// new instruction
    }
    console.log(`Your activation key is: ${activationKey}`);
} 
actKeys
(['134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11'])
// (["abcdefghijklmnopqrstuvwxyz",

//     "Slice>>>2>>>6",

//     "Flip>>>Upper>>>3>>>14",

//     "Flip>>>Lower>>>5>>>7",

//     "Contains>>>def",

//     "Contains>>>deF",

//     "Generate"])