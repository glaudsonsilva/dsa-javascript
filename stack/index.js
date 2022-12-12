class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const node = new Node(value);
    this.top = node;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;

    this.top = newNode;
    this.length++;
  }

  pop() {
    if (this.length == 0) return null;

    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;

    this.length--;

    return temp;
  }
}

let stack = new Stack(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack);
