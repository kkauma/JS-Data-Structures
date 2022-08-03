// Stacks
// LIFO

// Stack with an array
// const stack = [];
// stack.push("google");
// stack.push("stripe");
// stack.push("youtube");
// console.log(stack);
// console.log(stack.pop());
// stack.push("amazon");
// console.log(stack);
// console.log(stack.pop());
// console.log(stack);

// Stack (singly linked list)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (this.size === 0) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
