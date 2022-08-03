// Queue
// FIFO
// Insertion: O(1)
// Removal: O(1)

// Queue using an array
const q = [];
// q.push("FIRST");
// q.push("SECOND");
// q.push("THIRD");
// console.log(q.shift());
// console.log(q.shift());
// console.log(q.shift());
// console.log(q.shift());
q.unshift("FIRST");
q.unshift("SECOND");
q.unshift("THIRD");
console.log(q);
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());

// Queue (singly linked list)
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
// }
