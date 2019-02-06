// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// SOLUTION 1
function vowels(str) {
    let regularString = str.replace(/[^\w]/g, "").toLowerCase();
    let vowel = 0;

    for (let char of regularString) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowel++;
        }
    }

    return vowel;
}

// SOLUTION 2
function vowels(str) {
    let count = 0;
    let checker = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }
    }

    return count;
}

// SOLUTION 3
function vowels(str) {
    let matches = str.match(/[aeiou]/gi); 

    if (matches == null) {
        return 0;
    } else {
        return matches.length
    }

}

module.exports = vowels;
