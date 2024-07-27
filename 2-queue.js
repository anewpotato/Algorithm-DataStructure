class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
/**
 * 시간 복잡도는 모두 O(1).
 */
class Queue {
  constructor() {
    this.front = null; // 큐의 앞부분
    this.rear = null; // 큐의 뒷부분
    this._size = 0; // 큐의 크기
  }

  // 큐에 요소를 추가합니다.
  enqueue(value) {
    const newNode = new Node(value);
    if (this.rear) {
      this.rear.next = newNode;
    }
    this.rear = newNode;
    if (!this.front) {
      this.front = newNode;
    }
    this._size++;
  }

  // 큐에서 요소를 제거하고 반환합니다.
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const value = this.front.value;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null;
    }
    this._size--;
    return value;
  }

  // 큐의 첫 번째 요소를 반환하지만 제거하지 않습니다.
  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.front.value;
  }

  // 큐가 비어있는지 확인합니다.
  isEmpty() {
    return this._size === 0;
  }

  // 큐의 크기를 반환합니다.
  getSize() {
    return this._size;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2
console.log(queue.getSize()); // 1
