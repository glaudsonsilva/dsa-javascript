class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubledLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return;

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      const temp = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  shift() {
    if (!this.head) {
      return;
    } else if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      const temp = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return null;

    if (index < this.length / 2) {
      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    } else {
      let node = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        node = node.prev;
      }
      return node;
    }
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
    }
  }

  insert(index, value) {
    if (index == 0) {
      this.unshift(value);
    }
    if (index == this.length) {
      this.push(value);
    } else {
      const after = this.get(index);
      if (after) {
        const newNode = new Node(value);
        const before = after.prev;
        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;

        this.length++;
      }
    }
  }

  remove(index) {
    if (index == 0) {
      this.shift();
    } else if (index == this.length - 1) {
      this.pop();
    } else {
      const temp = this.get(index);
      temp.prev.next = temp.next;
      temp.next.prev = temp.prev;
      temp.next = null;
      temp.before = null;
      this.length--;
    }
  }
}

const list = new DoubledLinkedList(1);
list.push(2);
list.push(3);

list.remove(2);
console.log(list);
