// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let matrixArray = [];

    for (let x = 0; x < n; x++) {
        matrixArray.push([])
    }

    let counter = 1;
    let startRow = 0;
    let startColumn = 0;
    let endRow = n-1;
    let endColumn = n-1;

    while (startRow <= endRow && startColumn <= endColumn) {
        //TopRow
        for (let x = startColumn; x <= endColumn; x++) {
            matrixArray[startRow][x] = counter;
            counter++
        }
        startRow++;

        //Right side
        for (let x = startRow; x <= endRow; x++) {
            matrixArray[x][endColumn] = counter;
            counter++;
        }
        endColumn--;

        //Bottom side
        for(let x = endColumn; x >= startColumn; x--) {
            matrixArray[endRow][x] = counter;
            counter++;
        }
        endRow--;

        //Left side
        for (let x = endRow; x >= startRow; x--) {
            matrixArray[x][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }

    return matrixArray;
}

module.exports = matrix;
