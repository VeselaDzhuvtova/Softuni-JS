function oldBooks(input){
    let index = 0;
    let favorite = input[index];
    index++;

    let command = input[index];
    index++;

    let count = 0;

    while(command !== "No More Books"){
        if (command === favorite){
            console.log(`You checked ${count} books and found it.`);
            return;
        }
        count++;

        command = input[index];
        index++;
    }
    console.log(`The book you search is not here!`);
    console.log(`You checked ${count} books.`)
}