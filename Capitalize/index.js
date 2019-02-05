// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// SOLUTION 1
function capitalize(str) {
    let words = [];
    let strArray = str.split(' ');

    for (let word of strArray) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
}

// SOLUTION 2
function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let x = 1; x < str.length; x++) {
        if (str[x-1] === ' ') {
            result += str[x].toUpperCase();
        } else {
            result += str[x];
        }
    }

    return result
}

module.exports = capitalize;
