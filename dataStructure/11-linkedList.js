class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * head는 마지막 요소를 따라다니는게 아니라, 첫 번째 요소를 가리키고 있음.
 * 삽입, 삭제가 맨 앞이라면 O(1), 그 외 O(n)
 */
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    const node = new Node(value);

    if (this.head === null) this.head = node;
    else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  delete(value) {
    // 노드가 없는 경우,
    if (this.head === null) return null;
    else {
      let current = this.head;
      let prev = null;

      // 현재 노드가 찾는 노드가 아닌 경우,
      while (current !== null && current.value !== value) {
        prev = current; // 현재 노드를 저장해두고,
        current = current.next; // current 값 갱신.
      }

      // 리스트 없는 경우
      if (current === null) return null;

      // head에서 찾은 경우
      if (prev === null) {
        this.head = current.next;
      } else {
        prev.next = current.next;
      }

      this.size--;
    }
  }

  search(value) {
    let current = this.head;

    while (current !== null && current.value !== value) {
      current = current.next;
    }

    return current;
  }

  getSize() {
    return this.size;
  }

  print() {
    const list = [];
    let current = this.head;

    while (current !== null) {
      list.push(current.value);
      current = current.next;
    }

    console.log(list.join('->'));
  }
}

const linkedList = new SingleLinkedList();

linkedList.insert(10);
linkedList.insert(20);
linkedList.insert(30);

console.log(linkedList.getSize());
linkedList.print();

linkedList.delete(10);

linkedList.delete(30);
console.log(linkedList.getSize());

linkedList.print();

console.log(linkedList.search(10));
