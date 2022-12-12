class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const node = new Node(value);
    this.first = node;
    this.last = node;
    this.length = 1;
  }

  enqueue(value) {
    const node = new Node(value);

    if (this.length == 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;
  }

  dequeue() {
    if (this.length === 0) return null;

    const temp = this.first;

    if (this.length == 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
    }

    this.length--;

    return temp;
  }
}

let queue = new Queue(1);
console.log(queue.dequeue());

queue.enqueue(2);

console.log(queue);
