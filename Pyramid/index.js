// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// SOLUTION 1
function pyramid(n) {
    let cols = n + (n-1);
    let midPoint = Math.floor(cols/2);

    for (let row = 0; row < n; row ++) {
        let level = '';

        for (let column = 0; column < cols; column++) {
            if (midPoint - row <= column && midPoint + row >= column) {
                level+= '#'
            } else {
                level+= ' '
            }
        }
        console.log(level)
    }
}

// SOLUTION 2
function pyramid(n, row = 0, level='') {
    //base case
    if (row === n) {
        return
    }

    //2nd base case
    if (level.length === 2*n-1) {
        console.log(level);
        return pyramid(n, row+1)
    }

    let midPoint = Math.floor((2*n-1)/2);

    if (midPoint - row <= level.length && midPoint + row >= level.length) {
        level+= '#';
    } else {
        level+= ' ';
    }

    return pyramid(n, row, level);
}

module.exports = pyramid;
