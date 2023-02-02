function biggerHalf (arr) {

    arr.sort((a, b) => a - b);
    return arr.slice(arr.length / 2);
}
biggerHalf([3, 19, 14, 7, 2, 19, 6])

