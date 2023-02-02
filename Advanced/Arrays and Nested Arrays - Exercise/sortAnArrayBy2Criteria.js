function sortAnArrayBy2Criteria (arr) {

    let sortArr = arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });
    console.log(sortArr.join('\n'));

}
// return arr.sort((a,b) => {
//     a.length - b.length || a.localeCompare(b);
// }).join('\n')
// }

sortAnArrayBy2Criteria(['alpha','beta','gamma'])