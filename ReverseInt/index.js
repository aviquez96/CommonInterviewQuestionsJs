// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// SOLUTION 1
function reverseInt(n) {
    let reversed = n.toString().split('').reverse();

    if (reversed[reversed.length-1] == '-') {
        reversed.pop();
        reversed.unshift('-');
    }

    return parseInt(reversed.join(''));
}

// SOLUTION 2
// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('');

//     return parseInt(reversed) * Math.sign(n);
// }

module.exports = reverseInt;
