// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let counterArray = [0];
    let traverseArray = [root, 's'];

    while (traverseArray.length > 1) {
        let element = traverseArray.shift();
        if (element === 's') {
            counterArray.push(0);
            traverseArray.push(element);
        } else {
            traverseArray.push(...element.children);
            counterArray[counterArray.length - 1]++;
        }
    }

    return counterArray;

}

module.exports = levelWidth;
