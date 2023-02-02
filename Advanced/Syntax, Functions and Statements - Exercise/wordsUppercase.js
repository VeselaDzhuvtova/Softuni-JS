function wordsUppercase (text) {

return text.match(/\w+/g).join(', ').toUpperCase();
}
wordsUppercase ('Hi, how are you?');
console.log('-------------')
wordsUppercase ('hello')