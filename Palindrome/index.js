// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// SOLUTION 1
function palindrome(str) {
    let reversed = str.split('').reduce((reversed, currentCharacter) => {
        return currentCharacter + reversed;
    })

    if (reversed == str) {
        return true;
    }
    return false;
}

// SOLUTION 2
// function palindrome(str) {
//     let reversed = str.split('').reverse().join('');

//     return reversed === str;
// }

// SOLUTION 3
// function palindrome(str) {
//     return str.split('').every((char, i) => {
//         return char === str[str.length - 1 - i];
//     })
// }

module.exports = palindrome;
