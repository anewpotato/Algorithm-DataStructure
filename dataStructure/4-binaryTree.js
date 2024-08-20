class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  /* 평균적으로 O(log N), 최악은 O(h) or O(n) */
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  /* 평균적으로 O(log N), 최악은 O(h) */
  delete(value, node = this.root) {
    if (node === null) return null;

    if (value < node.value) {
      node.left = this.delete(value, node.left);
    } else if (value > node.value) {
      node.right = this.delete(value, node.right);
    } else {
      // case 1: leaft node
      if (node.left === null && node.right === null) return null;

      // case 2: 자식이 1개인 경우,
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // case 3: 자식이 2개인 경우, 오른쪽 최소값 혹은 왼쪽 최대값을 찾는다.
      const minRight = this.findMinNode(node.right);
      node.value = minRight.value;
      node.right = this.delete(minRight.value, node.right);

      return node;
    }
  }

  // 오른쪽 서브트리에서 최소값을 찾음.
  findMinNode(node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  /* 평균적으로 O(log N), 최악은 O(h) or O(n) */
  search(value, node = this.root) {
    if (node === null) return null;

    if (value < node.value) return this.search(value, node.left);
    else if (value > node.value) return this.search(value, node.right);
    else return node;
  }
  // 전위 순회 O(n)
  preOrder(node = this.root) {
    if (node !== null) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  // 중위 순회 O(n)
  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  // 후위 순회 O(n)
  postOrder(node = this.root) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }
}

// 트리 생성
const tree = new BinaryTree();

// 노드 삽입
tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(3);
tree.insert(7);
tree.insert(15);
tree.insert(30);

// 트리 중위 순회 (In-order traversal)
// 중위 순회: 3, 5, 7, 10, 15, 20, 30
console.log('In-order traversal:');
tree.inOrder(); // 3 5 7 10 15 20 30

// 탐색 예시
console.log('\nSearching for 15:');
const node = tree.search(15);
if (node) {
  console.log(`Found node with value: ${node.value}`);
} else {
  console.log('Node not found.');
}

// 노드 삭제 예시
console.log('\nDeleting node with value 20:');
tree.delete(20);

// 삭제 후 중위 순회
console.log('In-order traversal after deletion:');
tree.inOrder(); // 3 5 7 10 15 30
