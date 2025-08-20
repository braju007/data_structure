class FixedSizeStack {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
  }

  push(element) {
    if (this.stack.length >= this.maxSize) {
      throw new Error("Stack Overflow: Cannot push, stack is full!");
    }
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow: Cannot pop, stack is empty!");
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty!");
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  isFull() {
    return this.stack.length === this.maxSize;
  }
  print() {
    return this.stack;
  }
}

// Usage
const fixedStack = new FixedSizeStack(3);
fixedStack.push(1);
fixedStack.push(2);
fixedStack.push(3);
// fixedStack.push(4); // This will throw an error: Stack Overflow
console.log(fixedStack.pop()); // 3
console.log(fixedStack.print()); // [ 1, 2 ]
