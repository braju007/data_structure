class Deque {
    constructor() {
        this.deque = [];
    }
    addFront(element) {
        this.deque.unshift(element);
    }
    addRear(element) {
        this.deque.push(element);
    }
    removeFront() {
        if (!this.isEmpty()) {
            return this.deque.shift();
        }
        return null;
    }
    removeRear() {
        if (!this.isEmpty()) {
            return this.deque.pop();
        }
        return null;
    }
    getFront() {
        if (!this.isEmpty()) {
            return this.deque[0];
        }
        return null;
    }
    getRear() {
        if (!this.isEmpty()) {
            return this.deque[this.size() - 1];
        }
        return null;
    }
    isEmpty() {
        return this.deque.length === 0;
    }
    size() {
        return this.deque.length;
    }
}

// Create a deque instance 
const deque = new Deque();
// Adding 10, 20 to end of deque 
deque.addRear(10);
deque.addRear(20);
// Adding 5 to the front of deque 
deque.addFront(5);
// Accessing deque array from deque object 
console.log(deque.deque); // [ 5, 10, 20 ]
// Get first element of deque 
console.log(deque.getFront()); // 5
// Get last element of deque 
console.log(deque.getRear()); // 20
// Removing item at the front of array 
deque.removeFront();
console.log(deque.deque); // [ 10, 20 ]
// Removing item at the end of array 
deque.removeRear();
console.log(deque.deque); // [ 10 ]
