/** Node: node for a singly linked list. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	/** push(val): add new value to end of list. */

	push(val) {
		let newNode = new Node(val);
		if (this.head === null) {
			this.head = newNode;
      this.tail = newNode;
      return undefined
		}
		if (this.tail != null) {
			this.tail.next = newNode;
      return undefined
		}
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		let newNode = new Node(val);
		if (this.head != null) {
			newNode.next = this.head;
      return undefined
		}
		this.head = newNode;
    this.tail = newNode;
    return undefined
	}

	/** pop(): return & remove last item. */

	pop() {
		if (this.head) {
			let popped = this.tail;
			let currentNode = this.head;
			while (currentNode.next) {
				if (currentNode.next === popped) {
					currentNode.next = null;
					this.tail = currentNode;
					return popped;
				}
				currentNode = currentNode.next;
			}
		}
		throw 'The list is empty';
	}

	/** shift(): return & remove first item. */

	shift() {
		if (this.head) {
			let shifted = this.head;
			this.head = this.head.next;
			return shifted;
		}
		throw 'The list is empty';
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
    let currentNode = this.head;
    if (currentNode === null){
      throw 'Invalid index';
    }
		for (let i = 0; i <= idx; i++) {
			if (i === idx) {
				return currentNode;
			}
			currentNode = currentNode.next;
		}
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		let currentNode = this.head;
    if (currentNode === null){
      throw 'Invalid index';
    }
		for (let i = 0; i <= idx; i++) {
			if (i === idx) {
				currentNode.val = val;
			}
			currentNode = currentNode.next;
		}
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		let currentNode = this.head;
    let newNode = new Node (val)
    if (idx === 0){
      newNode.next = currentNode
      this.head = newNode
      if(this.tail === null) this.tail=newNode
    }
		for (let i = 0; i < idx; i++) {
			if (i === idx-1) {
        if (this.tail === currentNode){
          this.tail = newNode
        }
        newNode.next = currentNode.next
				currentNode.next = newNode;
        return undefined
			}
			currentNode = currentNode.next;
		}
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		let currentNode = this.head;
		for (let i = 0; i < idx; i++) {
			if (i === 0) {
				this.head = currentNode.next;
			}
			if (i === idx - 1) {
				let removed = currentNode.next;
				currentNode.next = removed.next;
				if (removed === this.tail) {
					this.tail = currentNode;
				}
				return removed;
			}
			currentNode = currentNode.next;
		}
	}

	/** average(): return an average of all values in the list */

	average() {
		let total;
		let currentNode = this.head;
		while (currentNode) {
			total += currentNode.val;
			currentNode = currentNode.next;
		}
		return total;
	}
}

module.exports = LinkedList;
