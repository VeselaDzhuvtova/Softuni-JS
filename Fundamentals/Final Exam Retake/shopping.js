function shopping(input) {

    let line = input.shift();
    let notes = {};

    while (line !== 'Go Shopping') {
        let [command, ...args] = line.split('->');

        if (command === 'Add') {

            let [store, fruits] = args;
            if (!notes.includes(args)) {
                let product = fruits.split(' ');
                notes[store] = {
                    item: []
                }
                for (const i of product) {
                    notes[store].item.push(i);
                }
            }
        } else if (command === 'Iportant') {

        } else if (command === 'Remove') {

        }
        line = input.shift();
        console.log(item)
    }
    
}
shopping(["Add->Grocery->Dried-fruit,Nuts,Lemons",
    "Add->Market->Nuts,Juice",
    "Important->Market->Snack",
    "Remove->Market",
    "Go Shopping"])
