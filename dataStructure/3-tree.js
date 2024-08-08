class Node {
  constructor(value) {
    this.value = value;
    this.children = []; // 일반 트리는 여러 개의 자식을 가질 수 있다.
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // 특정 값 노드를 찾는 재귀함수.
  findNode(node, value) {
    if (!node) return null;
    if (node.value === value) return node; // 종료 조건.

    for (const child of node.children) {
      const result = this.findNode(child, value);

      if (result) return result;
    }

    return null;
  }

  // 부모 노드를 찾는 재귀함수.
  findParent(node, value) {
    if (node === null) return null;

    for (const child of node.children) {
      if (value === child.value) return child; // 종료 조건.

      const result = this.findParent(child, value);

      if (result) return result;
    }

    return null;
  }

  // 삽입
  insert(value, parentValue) {
    // 첫 번째 데이터는 root.
    if (this.root === null) {
      this.root = new Node(value);

      return;
    }

    // root부터 부모 노드를 찾아 자식으로 추가.
    const parentNode = this.findNode(this.root, parentValue);

    if (parentNode) parentNode.children.push(new Node(value));
  }

  // 삭제
  delete(value) {
    const deleteNode = this.findNode(this.root, value);
    const parentNode = this.findParent(this.root, value);

    if (!deleteNode) return;

    if (parentNode) {
      parentNode.children = parentNode.children.filter(
        (child) => child !== value
      ); // 부모 노드의 자식에서 value값을 삭제.
    } else if (this.root && this.root.value === value) this.root = null; // root 노드인 경우 제거.
  }

  // 탐색 (특정 값을 찾고자 하는 경우 사용.)
  search(value) {
    return this.findNode(this.root, value) !== null;
  }

  // 순회 (모든 노드를 방문해야 하는 경우 사용.)
  // 전위 순회. NODE -> LEFT -> RIGHT (DFS)
  preorderTraversal() {
    const result = [];
    this.preorderRecursively(this.root, result);

    return result;
  }

  preorderRecursively(node, result) {
    if (node) {
      result.push(node.value);

      for (const child of node.children) {
        this.preorderRecursively(child, result);
      }
    }
  }

  // 후위 순회. LEFT -> ROOT -> RIGHT (DFS)
  postorderTraversal() {
    const result = [];
    this.postorderRecursively(this.root, result);

    return result;
  }

  postorderRecursively(node, result) {
    if (node) {
      for (const child of node.children) {
        this.postorderRecursively(child, result);
      }
      result.push(node.value);
    }
  }

  // 레벨 순회. (BFS)
  levelOrderTraversal() {
    const result = [];

    if (!this.root) return null;

    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();

      result.push(node.value);

      queue.push(...node.children);
    }

    return result;
  }
}

const tree = new Tree();

// 노드 삽입
tree.insert(1); // root 노드로 1 추가
tree.insert(2, 1); // 1의 자식으로 2 추가
tree.insert(3, 1); // 1의 자식으로 3 추가
tree.insert(4, 2); // 2의 자식으로 4 추가
tree.insert(5, 2); // 2의 자식으로 5 추가
tree.insert(6, 3); // 3의 자식으로 6 추가

console.log("Preorder Traversal:", tree.preorderTraversal()); // [1, 2, 4, 5, 3, 6]
console.log("Postorder Traversal:", tree.postorderTraversal()); // [4, 5, 2, 6, 3, 1]
console.log("Level Order Traversal:", tree.levelOrderTraversal()); // [1, 2, 3, 4, 5, 6]

// 노드 탐색
console.log("Search 4:", tree.search(4)); // true
console.log("Search 7:", tree.search(7)); // false

// 노드 삭제
tree.delete(2);
console.log("After deleting node 2:");
console.log("Preorder Traversal:", tree.preorderTraversal()); // [1, 3, 6]
console.log("Postorder Traversal:", tree.postorderTraversal()); // [6, 3, 1]
console.log("Level Order Traversal:", tree.levelOrderTraversal()); // [1, 3, 6]
