/** Node: node for a queue. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	/** enqueue(val): add new value to end of the queue. Returns undefined. */

	enqueue(val) {
		let newNode = new Node(val);
		let currentNode = this.first;
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
			this.size += 1;
		} else {
			while (currentNode) {
				if (!currentNode.next) {
					currentNode.next = newNode;
					this.last = newNode;
					this.size += 1;
				} else {
					currentNode = currentNode.next;
				}
			}
		}
	}

	/** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

	dequeue() {
		let firstItem = this.first;
		if (this.first) {
			this.first = firstItem.next;
			return firstItem.val;
		}
		throw 'The list is empty!';
	}

	/** peek(): return the value of the first node in the queue. */

	peek() {
		return this.first.val;
	}

	/** isEmpty(): return true if the queue is empty, otherwise false */

	isEmpty() {
		if (this.first) return true;
		return false;
	}
}

module.exports = Queue;
