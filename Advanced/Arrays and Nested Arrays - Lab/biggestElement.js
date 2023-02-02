function biggestElement(matrix) {

    let biggest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > biggest) {
                biggest = arr[j];
            }
        }
    }
    console.log(biggest);
}
biggestElement ([[3, 5, 7, 12],[-1, 4, 33, 2],[8, 3, 0, 4]]);
