class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (temp.value === value) return undefined;

      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;

    let temp = this.root;
    while (temp !== null) {
      if (temp.value === value) return true;

      temp = value < temp.value ? temp.left : temp.right;
    }

    return false;
  }

  minValueNode(currentNode) {
    if (currentNode.left === null) return currentNode;
    return this.minValueNode(currentNode.left);
  }

  bfs() {
    let currentNode;
    let queue = [this.root];
    let results = [];

    while (queue.length > 0) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return results;
  }

  dfsPreOrder() {
    let results = [];

    function traverse(currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);

    return results;
  }

  dfsPostOrder() {
    let results = [];

    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      results.push(currentNode.value);
    }
    traverse(this.root);

    return results;
  }

  dfsInOrder() {
    let results = [];

    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      results.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);

    return results;
  }
}

const bst = new BST();

bst.insert(47);
bst.insert(21);
bst.insert(76);
bst.insert(18);
bst.insert(27);
bst.insert(52);
bst.insert(82);

console.log(bst.bfs());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());
console.log(bst.dfsInOrder());
