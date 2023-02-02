// function extractText() {
//     let ulElement = document.getElementById('items');
    
// let textareaElement = document.getElementById('result');
// textareaElement.textContent = ulElement.textContent;
// }

//  2 вариант

function extractText() {
    const items = Array.from(document.querySelectorAll('li')); // взимам елементите и ги превръщам в масив
    const result = items.map(e => e.textContent).join('\n');// елементите в масива минават през map, който ще направи нов масив с техните стойности
    //  този нов масив се join-ва, което го прави от масив на стринг
    
    document.getElementById("result").value = result;
}