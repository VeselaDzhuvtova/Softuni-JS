function encodeAndDecodeMessages() {

    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', decode);
    buttons[1].addEventListener('click', encode);

    function decode() {
        let decodeMess = '';
        let input = textAreas[0].value;
        const inputL = input.length;

        for (let i = 0; i < inputL; i++) {
            decodeMess += String.fromCharCode(input[i].charCodeAt() + 1);
        }
        textAreas[1].value = decodeMess;
        textAreas[0].value = '';
    }

    function encode() {
        let encodeMess = '';
        let input = textAreas[1].value;
        const inputL = input.length;

        for (let i = 0; i < inputL; i++) {
            encodeMess += String.fromCharCode(input[i].charCodeAt() - 1);
        }
        textAreas[1].value = encodeMess;
    }
}
