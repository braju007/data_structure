class SimpleQueue {
  constructor() {
    this.items = [];
  }
  enqueue(value) {
    this.items.push(value);
  }
  dequeue() {
    this.items.shift();
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  size() {
    if (!this.isEmpty()) {
      return this.items.length;
    }
    return null;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    return this.items.toString();
  }
}
let sq = new SimpleQueue();
console.log(sq.isEmpty()); // true
console.log(sq.peek()); // null
console.log(sq.size()); // null
sq.enqueue(10);
sq.enqueue(20);
sq.enqueue(30);
sq.enqueue(40);
console.log(sq.print()); // 10,20,30,40
console.log(sq.isEmpty()); // false
console.log(sq.peek()); // 10
console.log(sq.size()); // 4
sq.dequeue();
console.log(sq.print()); // 20,30,40
