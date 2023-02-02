// function lastKNumbersSequance (n, k) {
    
//     let result = [1];

//     for (let i = 0; i < n; i++) {
//         let sum = 0;
//         let row = result.slice(-k);
//         for(let element of row){
//             sum += element;
//         }
//         result.push(sum);
//     }
//     console.log(result.join(' '));
// }

// lastKNumbersSequance (6, 3)

function lastKNumbersSequance(n, k) {

    let result = [1];

    for (let i = 0; i < n; i++) {
        let sequence = result.slice(-k);
        let sum = 0;
        for(let element of sequence){
            sum += element;
        }
        result.push(sum);
    }
    console.log(result.join(' '));
}
lastKNumbersSequance(6, 3);