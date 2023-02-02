// function extract(elementId) {
//     let para = document.getElementById(elementId).textContent;
//     let pattern = /\(([^)]+)\)/g;
//     let result = [];

//     let match = pattern.exec(para);
//     while (match) {
//         result.push(match[1]);
//         match = pattern.exec(para);
//     }
//     return result.join('; ')
// }
// extract('content')

function extract(content) {
    const text = document.getElementById(content).textContent;
    let result = '';

    const pattern = /\((.+?)\)/g;

    let match = pattern.exec(text);

    while(match != null) {
        result += match[1] + ';'
        match = pattern.exec(text);
    }
    return result;
}