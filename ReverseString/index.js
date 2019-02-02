// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1
// function reverse(str) {
//     let reversedString = "";

//     for (var x = 0; x < str.length; x++) {
//         reversedString += str.charAt(str.length-1-x);
//     }

//     return reversedString;
// }   

// SOLUTION 2
// function reverse(str) {
//     //Turns element into an array
//     let strArray = str.split('');
//     strArray.reverse();
//     return strArray.join('');

//     // return str.split('').reverse().join('');
// }

// SOLUTION 3
// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed
// }

// SOLUTION 4  
function reverse (str) {
    debugger;
    return str.split('').reduce((accumulator, currentValue) => {
        return currentValue + accumulator;
    })
}

reverse('asdfasdf');

module.exports = reverse;
