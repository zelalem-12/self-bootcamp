
// Adjecent list graph representation
class Graph{
    #nodes;
    constructor(){
        this.#nodes = {};
    }

    addNode(node){
        this.#nodes[node] =[]
    }
    addEdge(source, destination){
        if(!(this.#nodes[source] && this.#nodes[destination])) return false;
        if(!this.#nodes[source].includes(destination)){
            this.#nodes[source].push(destination);
        }
        // since  it's undirected graph
        if(!this.#nodes[destination].includes(source)){
            this.#nodes[destination].push(source);
        }
    }
    
    printNodes(){
        console.log(this.#nodes)
    }

    breadthFirstSearch(source, destination){
        const queue = [source];
        const visited = {};
        while(queue.length){
            const current = queue.shift();
            if(visited[current]) continue;
            if(current === destination) return true;
            visited[current] = true;
            const neighbors = this.#nodes[current];
            for(let i = 0; i < neighbors.length; i++){
                queue.push(neighbors[i]);
            }
        }
        return false;
    }

    depthFirstSearch(source, destination, visited={}){
        if(source === destination) return true;
        visited[source] = true;
        const neighbors = this.#nodes[source];
        for(let i = 0;i < neighbors.length; i++){
            if(visited[neighbors[i]]) continue;
            if(this.depthFirstSearch(neighbors[i], destination, visited)){
                return true;
            }
        }
        return false;
    }
}


const graph = new Graph();

graph.addNode('Vova');
graph.addNode('Tim');
graph.addNode('John');
graph.addNode('Ann');
graph.addNode('Lee');
graph.addNode('Ron');
graph.addNode('Jeff');


graph.addEdge('Tim', 'Vova');
graph.addEdge('Tim', 'Ann');
graph.addEdge('Tim', 'Lee');

graph.addEdge('Ann', 'Lee');
graph.addEdge('Ann', 'John');

graph.addEdge('Ron', 'Lee');
graph.addEdge('Ron', 'Jeff');


graph.printNodes();

console.log(graph.breadthFirstSearch('Tim', 'Jeff'));
console.log(graph.depthFirstSearch('Tim', 'Jeff'));