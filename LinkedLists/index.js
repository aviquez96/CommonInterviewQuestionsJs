// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    // When you do equivalences in function signatrues in javascript, they apply only when the client hasn't specified a value (a default value)
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {}

module.exports = { Node, LinkedList };
