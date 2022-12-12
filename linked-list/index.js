class LinkedList {
  constructor(value) {
    this.createNewList(value);
  }

  createNewList(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  push(value) {
    if (!this.tail) {
      this.createNewList(value);
    } else {
      const node = new Node(value);
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return;
    }

    this.length--;

    if (this.length === 0) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      return temp;
    } else {
      const tailHolder = this.findByIndex(this.head, this.length - 1, 0);
      const oldTail = tailHolder.next;

      tailHolder.next = null;
      this.tail = tailHolder;

      return oldTail;
    }
  }

  findByIndex(node, index, currentIndex) {
    if (index == currentIndex) {
      return node;
    }
    return this.findByIndex(node.next, index, ++currentIndex);
  }

  unshift(value) {
    if (!this.head) {
      this.createNewList(value);
    } else {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
      this.length++;
    }
    return this;
  }

  shift() {
    if (!this.head) {
      return null;
    } else {
      const temp = this.head;
      this.head = this.head.next;

      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }

      return temp;
    }
  }

  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    return this.findByIndex(this.head, index, 0);
  }

  set(index, value) {
    const temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const previousNode = this.get(index - 1);

    if (previousNode === null) {
      return;
    }

    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length++;
  }

  remove(index) {
    if (index === this.length - 1) return this.pop();
    if (index < 0) return null;

    if (index == 0) {
      const temp = this.head;
      this.head = this.head.next;
      return temp;
    }
    const previousNode = this.get(index - 1);
    const currentNode = previousNode.next;

    previousNode.next = currentNode.next;
    currentNode.next = null;

    this.length--;

    return currentNode;
  }

  reverse() {
    const head = this.head;
    const tail = this.tail;
    this.reverseRecursive(this.head, null);

    this.head = tail;
    this.tail = head;
  }

  reverseRecursive(node, next) {
    if (node.next) {
      this.reverse2(node.next, node);
    }
    node.next = next;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList(1);
list.push(2);
list.push(3);
list.push(4);

console.log(list);
list.reverse();

console.log(list);
