class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // 부모 노드 인덱스 계산
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // 왼쪽 자식 노드 인덱스 계산
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // 오른쪽 자식 노드 인덱스 계산
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // 삽입, 최악 O(log N) O(1)
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // 삭제, 최악 O(log N) O(1)
  removeMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const maxValue = this.heap[0];
    this.heap[0] = this.heap.pop(); // 마지막 요소를 루트로.

    this.heapifyDown();

    return maxValue;
  }

  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  // 최악 O(log N)
  heapifyUp() {
    let index = this.heap.length - 1; // 마지막으로 넣은 값의 index.

    // 부모 노드 인덱스가 있고, 삽입된 값이 부모 노드보다 큰 경우,
    while (
      this.getParentIndex(index) >= 0 &&
      this.heap[this.getParentIndex(index)] < this.heap[index]
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index); // 바꾼 부모 노드에서 또 확인.
    }
  }

  // 최악 O(log N)
  heapifyDown() {
    let index = 0; // 루트 노드 index.

    // 왼쪽 자식 노드 인덱스가 있으면,
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let largerChildIndex = this.getLeftChildIndex(index);

      // 오른쪽 자식 노드가 존재하고, 왼쪽 자식 노드보다 크면,
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)] > this.heap[index]
      ) {
        largerChildIndex = this.getRightChildIndex(index);
      }

      // 현재 노드가 자식 노드보다 크면 종료.
      if (this.heap[index] > this.heap[largerChildIndex]) break;

      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  peek() {
    if (this.heap.length === 0) return null;

    return this.heap[0];
  }
}
