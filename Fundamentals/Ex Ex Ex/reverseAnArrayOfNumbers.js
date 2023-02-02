function reverseAnArrayOfNumbers (n, arr) {

    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(arr[i])
        // newArr.reverse(arr[i]);
    }
    newArr.reverse(' ')
    console.log(newArr.join(' '))
}
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])