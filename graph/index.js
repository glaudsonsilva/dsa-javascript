class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this._removeLink(vertex1, vertex2);
      this._removeLink(vertex2, vertex1);
      return true;
    }
    return false;
  }

  removeVertex(vertexToRemove) {
    if (!this.adjacencyList[vertexToRemove]) return undefined;
    this.adjacencyList[vertexToRemove].forEach((vertex) => {
      this._removeLink(vertex, vertexToRemove);
    });

    delete this.adjacencyList[vertexToRemove];
  }

  _removeLink(vertex, vertexToRemove) {
    this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(
      (x) => x !== vertexToRemove
    );
  }
}

let graph = new Graph();

graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addEdge("1", "2");
graph.addEdge("2", "3");

console.log(graph);
graph.removeEdge("1", "2");

console.log(graph);
