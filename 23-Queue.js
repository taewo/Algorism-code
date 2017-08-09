/*

In computer science, a queue (/ˈkjuː/ KYEW) is a particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principal (or only) operations on the collection are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. This makes the queue a First-In-First-Out (FIFO) data structure. In a FIFO data structure, the first element added to the queue will be the first one to be removed. This is equivalent to the requirement that once a new element is added, all elements that were added before have to be removed before the new element can be removed. Often a peek or front operation is also entered, returning the value of the front element without dequeuing it. A queue is an example of a linear data structure, or more abstractly a sequential collection.

*/

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  enqueue(value) {
    const node = {
      value,
      next: null,
    };
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.count += 1;
  }

  dequeue() {
    if (this.count > 0) {
      if (this.count === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      this.count -= 1;
    }
  }

  front() {
    if (this.head) {
      return this.head.value;
    }
  }
}

const a = new Queue();
a.enqueue(1);
a.enqueue(2);
console.log(a)
