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
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let popped = this.tail;
    if (this.head === null) {
      throw "The list is empty";
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return popped;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        if (currentNode.next === popped) {
          currentNode.next = null;
          this.tail = currentNode;
          this.length--;
          return popped;
        }
        currentNode = currentNode.next;
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) {
      throw "The list is empty";
    }
    let shifted = this.head;
    if (this.head === this.tail) {
      this.tail = this.head.next;
    }
    this.head = this.head.next;
    this.length--;
    return shifted;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    if (currentNode === null) {
      throw "Invalid index";
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
    if (currentNode === null) {
      throw "Invalid index";
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
    if (idx > this.length || idx < 0) {
      throw "Invalid index.";
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let currentNode = this.head;
    let newNode = new Node(val);

    for (let i = 0; i < idx; i++) {
      if (i === idx - 1) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
      }
      currentNode = currentNode.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw "Invalid index.";
    }

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
    if (this.length === 0) return 0;

    let total;
    let currentNode = this.head;

    while (currentNode) {
      total += currentNode.val;
      currentNode = currentNode.next;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
