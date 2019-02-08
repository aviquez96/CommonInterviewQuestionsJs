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

    size() {
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

    removeFirst() {
        if (this.head) {
            let node = this.head;
            this.head = node.next; 
        }
        return
    }

    removeLast() {
        //If there is no head
        if (this.head == null) {
            return
        }

        //If the link has only 1 node (head)
        if (this.head.next == null) {
            this.head = null
            return
        }

        let previousNode = this.head
        let currentNode = previousNode.next;

        while (currentNode.next != null) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = null;
    }

    insertLast (data) {
        let lastNode = this.getLast();

        if (lastNode == null) {
            this.head = new Node(data);
        } else {
            lastNode.next = new Node(data);
        }
    }
}

module.exports = { Node, LinkedList };
