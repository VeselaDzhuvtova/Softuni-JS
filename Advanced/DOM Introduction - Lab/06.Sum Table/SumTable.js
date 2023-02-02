// function sumTable() {
//     let costElements = document.querySelectorAll('tr td:nth-of-type(2)');

//     let sum = Array.from(costElements).reduce((a, x) => {
//         let currentValue = Number(x.textContent) || 0;
//         return a + currentValue;
//     }, 0);

//     let resultElement = document.getElementById('sum');
//     resultElement.textContent = sum;
// }

function sumTable() {
    let costEl = Array.from(document.querySelectorAll('tr')).slice(1, -1); // (1, -1) означава да започне от индекс 1 до дължината - 1.
    let sum = 0;

    for(let el of costEl) {
       let value = Number(el.lastElementChild.textContent);
       sum += value;
    }
    document.getElementById('sum').textContent = sum;
}
