// function addAndRemoveElements(arrOfCommands) {

//     let result = [];
//     let num = 1;
//     for (let command of arrOfCommands) {
//         switch (command) {
//             case 'add':
//                 result.push(num);
//                 num++;
//                 break;
//             case 'remove':
//                 result.pop()
//                 num++;
//                 break;
//         }
//     }
//     if (result.length === 0) {
//         console.log('Empty');
//     } else {
//         console.log(result.join('\n'));
//     }
// }

function addAndRemoveElements (arrOfCommands) {
    let result = [];
    let num = 1;

    arrOfCommands.forEach(command => {
        command === 'add' ? result.push(num) : result.pop();
        num++;
    });
    return result.length === 0 ? 'Empty' : result.join('\n')
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add']
)