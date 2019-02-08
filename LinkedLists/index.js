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

class LinkedList {

    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        let newNode = new Node(data, this.head);
        this.head = newNode;
    }

    size () {
        let listSize = 0;
        let traversingNode = this.head; 

        while (traversingNode) {
            listSize++;
            traversingNode = traversingNode.next; 
        }

        return listSize;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let traversingNode = this.head;

        while (traversingNode) {
            if (traversingNode.next == null) {
                return traversingNode;
            }
            traversingNode = traversingNode.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst () {
        if (this.head) {
            let node = this.head;
            this.head = node.next; 
        }
        return
    }
}

module.exports = { Node, LinkedList };
