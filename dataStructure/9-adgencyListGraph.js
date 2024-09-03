class Graph {
  // 인접 리스트
  constructor() {
    this.adjList = new Map();
  }

  // 정점 추가 메소드, O(1)
  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []); // 새로운 정점을 추가하고 빈 리스트를 연결.
    }
  }

  // 정점 삭제 메소드, O(V+E)
  removeVertex(vertex) {
    if (this.adjList.has(vertex)) {
      for (let neighbor of this.adjList.get(vertex)) {
        this.removeEdge(vertex, neighbor); // 연결된 모든 간선 제거
        // 가중치 그래프일 경우,
        // this.removeEdge(vertex, neighbor.node);
      }
      this.adjList.delete(vertex);
    }
  }

  // 간선 추가 메소드, 평균 O(1)
  addEdge(v1, v2) {
    // 정점이 존재하지 않으면 추가.
    if (!this.adjList.has(v1)) {
      this.addVertex(v1);
    }
    if (!this.adjList.has(v2)) {
      this.addVertex(v2);
    }

    this.adjList.get(v1).push(v2);
    this.adjList.get(v2).push(v1); // 무방향 그래프인 경우,
    // 가중치 그래프일 경우,
    // this.adjList.get(v1).push({ node: v2, weight: weight });
    // this.adjList.get(v2).push({ node: v1, weight: weight });
  }

  // 간선 삭제 메소드, O(E)
  removeEdge(v1, v2) {
    if (this.adjList.has(v1)) {
      this.adjList.set(
        v1,
        this.adjList.get(v1).filter((vertex) => vertex !== v2)
        // 가중치 그래프일 경우,
        // this.adjList.get(v1).filter((edge) => edge.node !== v2)
      );
    }
    if (this.adjList.has(v2)) {
      this.adjList.set(
        v2,
        this.adjList.get(v2).filter((vertex) => vertex !== v1)
        // 가중치 그래프일 경우,
        // this.adjList.get(v2).filter((edge) => edge.node !== v1)
      );
    }
  }

  // 깊이 우선 탐색(DFS), O(V+E)
  dfs(start) {
    const visited = new Set(); // 방문한 정점을 추적하는 Set
    this._dfsUtil(start, visited);
  }

  // DFS 유틸리티 함수
  _dfsUtil(vertex, visited) {
    visited.add(vertex); // 현재 정점 방문 표시

    for (const neighbor of this.adjList.get(vertex)) {
      if (!visited.has(neighbor)) {
        this._dfsUtil(neighbor, visited); // 재귀적으로 인접 정점 방문
      }
    }
  }

  // 너비 우선 탐색(BFS), O(V+E)
  bfs(start) {
    const visited = new Set(); // 방문한 정점을 추적하는 Set
    const queue = [start]; // 탐색을 위한 큐

    visited.add(start);

    while (queue.length > 0) {
      const vertex = queue.shift(); // 큐에서 정점을 하나 꺼내옴

      for (const neighbor of this.adjList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor); // 인접한 정점을 큐에 추가
        }
      }
    }
  }

  // 간선 존재 여부 확인
  edgeExists(v1, v2) {
    return this.adjList.has(v1) && this.adjList.get(v1).includes(v2);
  }

  // 그래프 출력 메서드
  printGraph() {
    for (const [vertex, edges] of this.adjList.entries()) {
      console.log(`${vertex} -> ${edges.join(', ')}`);
    }
  }
}

// 그래프 초기화
const graph = new Graph();

// 정점 추가
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

// 간선 추가
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

console.log('Graph:');
graph.printGraph();

// DFS 탐색
console.log('DFS Traversal:');
graph.dfs('A');

// BFS 탐색
console.log('BFS Traversal:');
graph.bfs('A');

// 간선 존재 여부 확인
console.log('Edge exists between A and B:', graph.edgeExists('A', 'B')); // true
console.log('Edge exists between A and D:', graph.edgeExists('A', 'D')); // false

// 간선 제거
console.log('Removing edge between B and D...');
graph.removeEdge('B', 'D');
graph.printGraph();

// 정점 제거
console.log('Removing vertex C...');
graph.removeVertex('C');
graph.printGraph();
