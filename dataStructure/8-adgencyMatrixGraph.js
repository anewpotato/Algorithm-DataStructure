class Graph {
  constructor(size) {
    this.size = size; // 그래프의 정점 수
    this.adjMatrix = Array.from({ length: size }, () => Array(size).fill(0)); // 인접 행렬 초기화
  }

  // 간선 추가 메서드, O(1)
  addEdge(v1, v2) {
    if (this._isValidVertex(v1) && this._isValidVertex(v2)) {
      this.adjMatrix[v1][v2] = 1;
      this.adjMatrix[v2][v1] = 1; // 무방향 그래프일 경우
    }
  }

  // 간선 제거 메서드, O(1)
  removeEdge(v1, v2) {
    if (this._isValidVertex(v1) && this._isValidVertex(v2)) {
      this.adjMatrix[v1][v2] = 0;
      this.adjMatrix[v2][v1] = 0; // 무방향 그래프일 경우
    }
  }

  // 깊이 우선 탐색(DFS), O(V^2)
  dfs(start) {
    const visited = new Array(this.size).fill(false);
    this._dfsUtil(start, visited);
  }

  // DFS 유틸리티 함수, O(V^2)
  _dfsUtil(vertex, visited) {
    visited[vertex] = true;
    console.log(`Visited ${vertex}`);

    for (let i = 0; i < this.size; i++) {
      if (this.adjMatrix[vertex][i] === 1 && !visited[i]) {
        this._dfsUtil(i, visited);
      }
    }
  }

  // 너비 우선 탐색(BFS)
  bfs(start) {
    const visited = new Array(this.size).fill(false);
    const queue = [];

    visited[start] = true;
    queue.push(start);

    while (queue.length > 0) {
      const vertex = queue.shift();
      console.log(`Visited ${vertex}`);

      for (let i = 0; i < this.size; i++) {
        if (this.adjMatrix[vertex][i] === 1 && !visited[i]) {
          visited[i] = true;
          queue.push(i);
        }
      }
    }
  }

  // 간선 존재 여부 확인
  edgeExists(v1, v2) {
    return (
      this._isValidVertex(v1) &&
      this._isValidVertex(v2) &&
      this.adjMatrix[v1][v2] === 1
    );
  }

  // 정점 유효성 확인
  _isValidVertex(v) {
    return v >= 0 && v < this.size;
  }

  // 인접 행렬 출력 메서드
  printGraph() {
    console.log('Adjacency Matrix:');
    for (let row of this.adjMatrix) {
      console.log(row.join(' '));
    }
  }
}

const graph = new Graph(5); // 정점 수가 5인 그래프 생성
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.printGraph();

console.log('DFS Traversal:');
graph.dfs(0);

console.log('BFS Traversal:');
graph.bfs(0);

console.log('Check if edge exists between 1 and 2:', graph.edgeExists(1, 2));
console.log('Check if edge exists between 0 and 4:', graph.edgeExists(0, 4));

console.log('Removing an edge between 1 and 2...');
graph.removeEdge(1, 2);
graph.printGraph();

console.log(
  'Check if edge exists between 1 and 2 after removal:',
  graph.edgeExists(1, 2)
);
