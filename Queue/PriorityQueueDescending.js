class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(item, priority) {
    this.items.push({ item, priority });
    this.items.sort((a, b) => b.priority - a.priority);
  }

  dequeue() {
    return this.items.shift().item;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 2a", 1);
priorityQueue.enqueue("Task 3", 4);
priorityQueue.enqueue("Task 4", 5);
while (priorityQueue.items.length > 0) {
  console.log(priorityQueue.dequeue());
}
//   Task 4
//   Task 3
//   Task 1
//   Task 2
//   Task 2a
