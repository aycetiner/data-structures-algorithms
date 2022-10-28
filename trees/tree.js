/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let queue = [this.root];
    let sum = 0;
    while (queue.length > 0) {
      let node = queue.shift();
      sum += node.val;
      for (let i of node.children) {
        queue.push(i);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let queue = [this.root];
    let count = 0;
    while (queue.length > 0) {
      let node = queue.shift();
      if (node.val % 2 == 0) {
        count++;
      }
      for (let i of node.children) {
        queue.push(i);
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let queue = [this.root];
    let count = 0;
    while (queue.length > 0) {
      let node = queue.shift();
      if (node.val > lowerBound) {
        count++;
      }
      for (let i of node.children) {
        queue.push(i);
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };

// let root = new TreeNode(1);

// let child1 = new TreeNode(2);
// let child2 = new TreeNode(3);

// let gchild1 = new TreeNode(21);
// let gchild2 = new TreeNode(22);
// let gchild3 = new TreeNode(31);
// let gchild4 = new TreeNode(32);

// root.children.push(child1,child2)
// child1.children.push(gchild1, gchild2)
// child2.children.push(gchild3, gchild4)

// let myTree = new Tree(root);
