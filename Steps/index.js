// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// SOLUTION 1
// function steps(n) {
//     for (let x = 1; x <= n; x++) {
//         let string = ""
//         for (let y = 0; y < n; y++) {
//             if (y < x) {
//                 string+= '#'
//             } else {
//                 string+= ' '
//             }
//         }
//         console.log(string);
//     }
// }

// SOLUTION 2 (recursion)
function steps(n, row = 0, stair = '') {
   if (n === row) {
       return;
   } 

   if (n === stair.length) {
       console.log(stair);
       return steps(n, row + 1);
   }

   if (stair.length <= row) {
       stair+= '#' 
   } else {
       stair+= ' '
   }

   steps(n, row, stair);
}

module.exports = steps;
