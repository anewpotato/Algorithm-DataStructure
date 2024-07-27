class Node {
  constructor(value) {
    this.value = value; // 노드의 값
    this.next = null; // 다음 노드를 가리키는 포인터
  }
}

/**
 * 시간 복잡도는 모두 O(1).
 */
class Stack {
  constructor() {
    this.top = null; // 스택의 상단을 가리키는 포인터
    this.size = 0; // 스택의 크기
  }

  // 요소 추가 (스택의 top에 추가)
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top; // 새 노드의 다음을 현재 top으로 설정
    this.top = newNode; // top을 새 노드로 업데이트
    this.size++;
  }

  // 요소 제거 (스택의 top에서 제거)
  pop() {
    if (this.isEmpty()) {
      return null; // 스택이 비어있을 때
    }
    const removedNode = this.top;
    this.top = this.top.next; // top을 다음 노드로 업데이트
    this.size--;
    return removedNode.value; // 제거된 노드의 값 반환
  }

  // 스택의 상단 요소를 반환
  peek() {
    return this.isEmpty() ? null : this.top.value;
  }

  // 스택이 비어있는지 확인
  isEmpty() {
    return this.size === 0;
  }

  // 스택의 크기 반환
  getSize() {
    return this.size;
  }

  // 스택의 모든 요소를 문자열로 반환
  toString() {
    let current = this.top;
    let result = "";
    while (current) {
      result += current.value + " ";
      current = current.next;
    }
    return result.trim();
  }
}
