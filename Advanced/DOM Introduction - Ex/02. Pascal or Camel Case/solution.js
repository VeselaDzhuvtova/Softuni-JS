// function solve() {

//   let text = document.getElementById('text').value;
//   let convention = document.getElementById('naming-convention').value;
//   let result = '';

//   if (convention === 'Camel Case') {

//     for (let i = 0; i < text.length; i++) {
//       if (text[i] === ' ') {
//         result += (text[i+1].toUpperCase());
//         i++;
//       } else {
//         result += (text[i].toLowerCase());
//       }
//     }
//   } else if (convention === 'Pascal Case') {
//     result += (text[0].toUpperCase());
//     for (let i = 1; i < text.length; i++) {
//         if (text[i] === ' ') {
//           result += (text[i + 1].toUpperCase());
//           i++;
//         } else {
//           result += (text[i].toLowerCase());
//         }
//       }
//   } else {
//     result = 'Error!';
//   }
//   let resultElement = document.getElementById('result');
//   resultElement.textContent = result;
// }

function solve() {

  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  let result = '';

  if (currentCase === 'Camel Case') {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        result += (input[i + 1].toUpperCase());
        i++;
      } else {
        result += (input[i].toLowerCase())
      }
    }
  } else if (currentCase === 'Pascal Case') {
    result += (input[0].toUpperCase());
    for (let i = 1; i < input.length; i++) {
      if (input[i] === ' '){
        result += (input[i + 1].toUpperCase());
        i++;
      } else {
        result += (input[i].toLowerCase());
      }
    }
  } else {
    result = 'Error!';
  }
  let resultElement = document.getElementById('result');
  resultElement.textContent = result;
  console.log(result)
}
solve("this is an example", "Camel Case")