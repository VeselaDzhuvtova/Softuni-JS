function worldTour(input) {

    let arr = input.shift();

    let instructions = input.shift();
    while (instructions != 'Travel') {
        let commands = instructions.split(':');
        let command = commands[0];

        switch (command) {
            case 'Add Stop':
                let index = Number(commands[1]);
                let stop = commands[2];


                break;
            case 'Remove Stop':

                break;
            case 'Switch':

                break;

        }
        // console.log(startIndex)

        instructions = input.shift();
    }



} worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);
