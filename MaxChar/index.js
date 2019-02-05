// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// SOLUTION 1
function maxChar(str) {
    let chars = {};
    let charAmount = 0;
    let maxChar = '';

    for (let char of str) {
        if (typeof chars[char] === 'undefined') {
            chars[char] = 1;
        } else {
            chars[char]++;
        }

        if (chars[char] > charAmount) {
            maxChar = char;
            charAmount = chars[char];
        }
    }
    return maxChar
}

// SOLUTION 2
// function maxChar(str) {
//     const charMap = {}
//     let max = 0;
//     let maxChar = '';

//     for (let char of str) {
//         if (charMap[char]) {
//             charMap[char]++;
//         }
//         else {
//             charMap[char] = 1;
//         }
//     }
    
//     for (let char in charMap) {
//         if (charMap[char] > max) {
//             max = charMap[char];
//             maxChar = char;
//         }
//     }

//     return maxChar;
// }

module.exports = maxChar;
