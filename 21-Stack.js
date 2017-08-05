/*

In computer science, a stack is an abstract data type that serves as a collection of elements,
with two principal operations: push, which adds an element to the collection,
and pop, which removes the most recently added element that was not yet removed.
The order in which elements come off a stack gives rise to its alternative name, LIFO (for last in, first out).
Additionally, a peek operation may give access to the top without modifying the stack.

*/

class Stack {
  constructor() {
    this.store = [];
    this.length = 0;
  }

  push(value) {
    this.store.push(value);
    this.length += 1;
  }

  pop() {
    if (this.length > 0) {
      this.length -= 1;
      return this.store.pop();
    }
  }

  getLength() {
    return this.length;
  }

  peek() {
    return this.store[this.length - 1];
  }
}

const foo = new Stack();
foo.push(1);
foo.push(2);
foo.push(3);
foo.push(4);
foo.push(5);
console.log(foo.store, foo.getLength());  //  [ 1, 2, 3, 4, 5 ] 5
foo.pop();
foo.pop();
console.log(foo.store, foo.getLength());  // [ 1, 2, 3 ] 3
console.log(foo.peek()); // 3
