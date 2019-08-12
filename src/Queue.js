class _Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
  }

  enqueue(item) {
    const node = new _Node(item)
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;

    }
    this.last = node;

    node.next = null
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.data;
  }

  displayQueue() {
    let currentNode = this.first;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  queueArray() {
    let currentNode = this.first;
    let array = [];
    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return array;
  }

  peekQ() {
    if (this.first === null) {
      return null
    }
    return this.first.data
  }

  isEmptyQ() {
    return this.start === null
  }

  removeAllButLast() {
    let currentNode = this.first;
    while (currentNode.next !== null) {
      this.dequeue()
      currentNode = currentNode.next;
    }
    return this
  }

  allButFirst() {
    this.dequeue()
    return this
  }

}

function main () {
  const q = new Queue;
  q.enqueue({name: "bob"})
  q.enqueue({name: "jan"})
  q.enqueue({name: "dandyddd"})
  q.displayQueue()
  q.removeAllButLast()
  q.displayQueue()
}

main();

module.exports = { Queue, _Node }
