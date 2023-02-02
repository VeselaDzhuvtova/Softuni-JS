function accountBalance(input) {
    let index = 0
    let total = 0
 
    while(input[index] != "NoMoreMoney") {
        if(input[index] < 0) {
            console.log("Invalid operation!")
            break;
        } else {
            console.log(`Increase: ${Number(input[index]).toFixed(2)}`)
            total += Number(input[index])
        }
 
        index++
    }
 
    console.log(`Total: ${total.toFixed(2)}`)
}