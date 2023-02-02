function equalNeighbors(matrix) {

    let matrixL = matrix.length;
    let count = 0;

    for (let row = 0; row < matrixL; row++) {
        for (let col = 0; col < matrix[row].length - 1; col++) {
            if (matrix[row][col] === matrix[row][col + 1]) {
                count++;
            }
        }
    }
    const rows = matrix[0].length;

    for (let col = 0; col < rows; col++) {
        for (let row = 0; row < matrixL - 1; row++) {
            if (matrix[row][col] === matrix[row + 1][col]) {
                count++;
            }
        }
    }
    console.log(count);
}


// equalNeighbors([['1', '2', '3'], ['1', '2', '5']]);
equalNeighbors([
['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])