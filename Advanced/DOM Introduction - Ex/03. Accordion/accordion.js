// function toggle() {

//     let button = document.querySelector('.button');
//     let text = document.querySelector('#extra');

//     if (button.textContent === 'More') {
//         button.textContent = 'Less'
//         text.style.display = 'block';
//     } else {
//         button.textContent = 'More'
//         text.style.display = 'none'
//     }
//     console.log(text);
// }

function toggle() {

    let butt = document.querySelector('.button');
    let text = document.querySelector('#extra');

    if(butt.textContent === 'More') {
        butt.textContent = 'Less';
        text.style.display = 'block'
    } else if (butt.textContent === 'Less') {
        butt.textContent = 'More';
        text.style.display = 'none'
    }
}