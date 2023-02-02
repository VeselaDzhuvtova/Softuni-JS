function listOfNames (arr) {

    // let result = arr.sort((a,b) => a.localeCompare(b));

    // for (let i = 0; i < result.length; i++){
    //     console.log(`${i+1}.${result[i]}`);
    // }

    return arr.sort((a,b) => a.localeCompare(b))
    .forEach((x,i) => console.log(`${i+1}.${x}`));
}
listOfNames (["John", "Bob", "Christina", "Ema"])