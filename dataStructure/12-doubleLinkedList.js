class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);

    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  prepend(value) {
    const node = new Node(value);

    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  delete(value) {
    if (this.head === null && this.tail === null) return null;

    let current = this.head;

    while (current !== null && current.value !== value) {
      current = current.next;
    }

    if (current === this.head) {
      this.head = current.next;
      current.next.prev = null;
    } else if (current === this.tail) {
      this.tail = current.prev;
      current.prev.next = null;
    } else {
      current.prev.next = current.next; // 이전 노드의 next 값 전달.
      current.next.prev = current.prev; // 다음 노드의 prev 값 전달.
    }

    this.size--;
  }
  search(value) {
    if (this.head === null && this.tail === null) return null;

    let current = this.head;

    while (current !== null && current.value !== value) {
      current = current.next;
    }

    return current;
  }

  print() {
    const values = [];
    let current = this.head;

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(' <-> '));
  }

  // 리스트 크기 반환
  getSize() {
    return this.size;
  }
}

const dll = new DoubleLinkedList();

dll.append(10);
dll.append(20);
dll.append(30);
dll.print(); // 10 <-> 20 <-> 30

dll.prepend(5);
dll.print(); // 5 <-> 10 <-> 20 <-> 30

dll.append(15);
dll.print(); // 5 <-> 10 <-> 20 <-> 30 <-> 15

dll.delete(5);
dll.delete(15);

dll.delete(20);
dll.print(); // 5 <-> 10 <-> 30
