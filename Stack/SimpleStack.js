class DynamicSizeStack {
  constructor() {
    this.stack = [];
  }

  push(element) {
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

  print() {
    console.log(this.stack);
  }

  // Optionally, you could add methods for shrinking or resizing,
  // but in a simple dynamic stack, it will just grow when pushing.
}

// Usage
const dynamicStack = new DynamicSizeStack();
dynamicStack.push(1);
dynamicStack.push(2);
dynamicStack.push(3);
dynamicStack.push(4); // No overflow, grows dynamically
console.log(dynamicStack.pop()); // 4
dynamicStack.print(); // [ 1, 2, 3 ]
