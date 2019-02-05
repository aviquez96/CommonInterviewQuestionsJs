// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// SOLUTION 1
// function anagrams(stringA, stringB) {
//     //Getting rid of the punctuation and normalizing variables to lowercase
//     let regularStringA = stringA.replace(/[^\w]/g, "").toLowerCase();
//     let regularStringB = stringB.replace(/[^\w]/g, "").toLowerCase();

//     //Building character maps
//     let charMapA = {};
//     let charMapB = {};

//     //If the strings are not the same length, then they can't be anagrams
//     if (regularStringA.length !== regularStringB.length) {
//         return false;
//     } else {
//         //Map the characters of stringA
//         for (let character of regularStringA) {
//             if (!charMapA[character]) {
//                 charMapA[character] = 1;
//             } else {
//                 charMapA[character]++
//             }
//         }
//         //Map the characters of stringB
//         for (let character of regularStringB) {
//             if (!charMapB[character]) {
//                 charMapB[character] = 1;
//             } else {
//                 charMapB[character]++
//             }
//         }

//         //Comparing if mapped characters are the same and have the same quanitity
//         for (let character in charMapA) {
//             if (charMapA[character] != charMapB[character]) {
//                 return false
//             }        
//         }
//         return true;

//     }
// }

// SOLUTION 2
// function anagrams(stringA, stringB) {
//     let aCharMap = buildCharMap(stringA);
//     let bCharMap = buildCharMap(stringB);

//     if (Object.keys(aCharMap).length != Object.keys(bCharMap).length) {
//         return false;
//     } 

//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }
//     return true;
// }

// function buildCharMap (str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap
// }

// SOLUTION 3
function anagrams(stringA, stringB) {
    let sortedStringA = cleanString(stringA)
    let sortedStringB = cleanString(stringB) 

    if (sortedStringA === sortedStringB) {
        return true;
    } 

    return false

    // return cleanString(stringA) === cleanString(stringB);

}

function cleanString (str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
