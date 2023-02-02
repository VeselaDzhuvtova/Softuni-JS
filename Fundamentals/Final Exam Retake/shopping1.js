function shopping(input) {

    let line = input.shift();
    let list = [];

    while (line !== 'Go Shopping') {
        let [command, ...args] = line.split('->');
        let type = args.shift();//Market Grocery
        let items = args.shift().split(',');//Dried-fruits, Nuts,Lemons
        let item = items.shift().split(',')
        if (command === 'Add') {
            for (item of items) {
                if (!item.includes) {
                    list.join(item)
                }
            }
        }
        console.log(list)

        line = input.shift();
    }

    console.log(line)
}
shopping(["Add->Grocery->Dried-fruit,Nuts,Lemons",
    "Add->Market->Nuts,Juice",
    "Important->Market->Snack",
    "Remove->Market",
    "Go Shopping"])