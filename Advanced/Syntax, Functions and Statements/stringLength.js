function stringLength (first, second, third) {

    let firstLength = first.length;
    let secondLength = second.length;
    let thirdLength = third.length;

    let sum = firstLength + secondLength + thirdLength;
    let average = sum / 3;
    console.log(sum)
    console.log(Math.floor(average))
}   
stringLength ('chocolate', 'ice cream', 'cake')