// function colorize() {
//     let rows = document.querySelectorAll('table tr');

//     let index = 0;

//     for (let row of rows) {
//         index++;
//         if (index % 2 == 0)
//         row.style.background = "teal";
//     }
// }

// function colorize() {
//     const rows = document.querySelectorAll('tr');

//     for (let i = 1; i < rows.length; i+=2){
//        rows[i].style.background = 'teal'
//     }
// }

function colorize() {
    const rows = document.querySelectorAll('tr:nth-child(2n)').forEach(e => e.style.background = 'teal');

}
