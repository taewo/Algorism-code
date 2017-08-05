/*

In computer science, a linked list is a linear collection of data elements,
in which linear order is not given by their physical placement in memory.
Each pointing to next node by means of a pointer.
It is a data structure consisting of a group of nodes which together represent a sequence.
Under the simplest form, each node is composed of data and a reference (in other words, a link) to
the next node in the sequence. This structure allows for efficient insertion or removal of elements
from any position in the sequence during iteration. More complex variants add additional links,
allowing efficient insertion or removal from arbitrary element references.

*/


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  get length() {
    return this.count;
  }

  addLast(value) {
    const node = {
      value,
      next: null,
    };
    if (this.count === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.count += 1;
  }

  addFirst(value) {
    const node = {
      value,
      next: null,
    };
    if (this.count === 0) {
      this.head = node;
      this.tail = node;
    } else {
      const temp = this.head;
      this.head = node;
      this.head.tail = temp;
    }
    this.count += 1;
  }

  removeFirst() {
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

  removeLast() {
    if (this.count > 0) {
      if (this.count === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let current = this.head;
        while (current.next !== this.tail) {
          current = current.next;
        }
        current.next = null;
        this.tail = current;
      }
      this.count -= 1;
    }
  }
}
