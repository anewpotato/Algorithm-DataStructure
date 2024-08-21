class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

/* 순회 O(N), 나머지 연산 O(log N) */
class AVLTree {
  constructor() {
    this.root = null;
  }

  // 높이 계산
  getHeight(node) {
    return node ? node.height : 0;
  }

  // 균형 인수 계산
  getBalance(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  // 왼쪽 회전
  leftRotate(y) {
    const x = y.right;
    const T2 = x.left;

    x.left = y;
    y.right = T2;

    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

    return x;
  }

  // 오른쪽 회전
  rightRotate(x) {
    const y = x.left;
    const T2 = y.right;

    y.right = x;
    x.left = T2;

    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    return y;
  }

  // 삽입 메소드
  insert(value) {
    this.root = this.insertNode(value, this.root);
  }

  insertNode(value, node) {
    if (!node) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(value, node.left);
    } else if (value > node.value) {
      node.right = this.insertNode(value, node.right);
    } else {
      return node;
    }

    // 노드 높이 업데이트
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

    // 균형 인수 계산
    const balance = this.getBalance(node);

    // 좌측 자식 불균형 (Left Left Case)
    if (balance > 1 && value < node.left.value) {
      return this.rightRotate(node);
    }

    // 우측 자식 불균형 (Right Right Case)
    if (balance < -1 && value > node.right.value) {
      return this.leftRotate(node);
    }

    // 좌측 우측 자식 불균형 (Left Right Case)
    if (balance > 1 && value > node.left.value) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // 우측 좌측 자식 불균형 (Right Left Case)
    if (balance < -1 && value < node.right.value) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  // 삭제 메소드 (내용은 동일)
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (!node) return node;

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (!node.left || !node.right) {
        node = node.left || node.right;
      } else {
        const minRight = this.findMinNode(node.right);
        node.value = minRight.value;
        node.right = this.deleteNode(node.right, minRight.value);
      }
    }

    if (!node) return node;

    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

    const balance = this.getBalance(node);

    if (balance > 1 && this.getBalance(node.left) >= 0) {
      return this.rightRotate(node);
    }

    if (balance > 1 && this.getBalance(node.left) < 0) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    if (balance < -1 && this.getBalance(node.right) <= 0) {
      return this.leftRotate(node);
    }

    if (balance < -1 && this.getBalance(node.right) > 0) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  // 최소 노드 찾기
  findMinNode(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  // 검색 메소드
  search(value, node = this.root) {
    if (!node) return null;
    if (value === node.value) return node;
    if (value < node.value) return this.search(value, node.left);
    return this.search(value, node.right);
  }

  // 전위 순회
  preOrder(node = this.root) {
    if (node !== null) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  // 중위 순회
  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  // 후위 순회
  postOrder(node = this.root) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }
}

// 사용 예제
const avl = new AVLTree();
avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(15);
avl.insert(25);
avl.insert(35);

console.log('In-order traversal:');
avl.inOrder();

avl.delete(20);

console.log('\nPre-order traversal:');
avl.preOrder();

console.log('\nPost-order traversal:');
avl.postOrder();
