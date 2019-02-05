// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// SOLUTION 1
// function chunk(array, size) {
//     let chunkedArray = [];
//     //split the arrays in individual pieces
//     for (let element of array) {
//         const last = chunkedArray[chunkedArray.length-1];
//         if (!last || last.length === size) {
//             chunkedArray.push([element]);
//         } else {
//             last.push(element);
//         }
//     }
//     return chunkedArray
// }

// SOLUTION 2
function chunk(array, size) {
    let chunkedArray = [];

    for (let x = 0; x < array.length; x+=size) {
        chunkedArray.push(array.slice(x, x+size));
    }
    
    return chunkedArray
}



module.exports = chunk;
