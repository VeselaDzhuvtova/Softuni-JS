// function printEveryNthElementFromAnArray (arr, step) {

//     let result = [];

//     for (let i = 0; i < arr.length; i += step) {
//         result.push(arr[i]);
//     }
//     return result;
// }
function printEveryNthElementFromAnArray (arr, step) {

    return arr.filter((el, i) => {
        if(i % step === 0){
            return el;
    }
    })
}
printEveryNthElementFromAnArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)
console.log('-----------------------')
printEveryNthElementFromAnArray (['dsa',
'asd', 
'test', 
'tset'], 
2
)
console.log('-----------------------')

printEveryNthElementFromAnArray(['1', 
'2',
'3', 
'4', 
'5'], 
6
)