class Graph{
    #nodes;
    constructor(){
        this.#nodes = {};
    }
    addNode(node){
        this.#nodes[node]= []
    }
    addEdges(sourceNode, destinatioNode){
        if(sourceNode === null || destinatioNode === null) return false;

        if(!this.#nodes[sourceNode].includes(destinatioNode)){
            this.#nodes[sourceNode].push(destinatioNode);
        }
        if(!this.#nodes[destinatioNode].includes(sourceNode)){
            this.#nodes[destinatioNode].push(sourceNode);
        }
    }
    
    showNodes(){
        console.log(this.#nodes)
    }
     
    bfs(sourceNode, destinatioNode){
        const queue =  [sourceNode];
        const visitedNodes = {};
        
        while(queue.length !== 0){
            const curr = queue.shift();
            if(visitedNodes[curr]) continue;
            if(curr === destinatioNode) return true;

            visitedNodes[curr] = true;
            
            const neighbors = this.#nodes[curr];
            
            for(let i = 0; i < neighbors.length; i++){
                queue.push(neighbors[i]);
            }
        }

        return false;
    }

    dfs(sourceNode, destinatioNode, visitedNodes={}){
        if(visitedNodes[sourceNode]) return false;

        if(sourceNode === destinatioNode) return true;

        visitedNodes[sourceNode] = true;
        const neighbors = this.#nodes[sourceNode];

        for(let i = 0; i < neighbors.length; i++){
           if(this.dfs(neighbors[i], destinatioNode, visitedNodes)) return true;
        }
        return false;
    }
    dfsIterative(sourceNode, destinatioNode){
        const stack = [sourceNode];
        const visitedNodes = {};

        while(stack.length !== 0){
            const curr = stack.pop();
            if(curr === destinatioNode) return true;

            visitedNodes[curr] = true;

            const neighbors = this.#nodes[curr];
            for(let neighbor = 0; neighbor < neighbors.length; neighbor++){
                if(!visitedNodes[neighbors[neighbor]] && !stack.includes(neighbors[neighbor])){
                stack.push(neighbors[neighbor]);
                }
            }
        }
        return false;
    }
}

// Driving Code 

    /* 
    Vava - Tim          Jeff
           -  -        -
  John  -  Ann - Lee - Ron
    
    */

  const graph = new Graph();
  graph.addNode('Vova');
  graph.addNode('Tim');
  graph.addNode('Ann');
  graph.addNode('John');
  graph.addNode('Lee');
  graph.addNode('Ron');
  graph.addNode('Jeff');


  graph.addEdges('Tim', 'Vova');
  graph.addEdges('Tim', 'Ann');

  graph.addEdges('Tim', 'Lee');
  graph.addEdges('Ann', 'Lee');
  graph.addEdges('Ann', 'John');
  graph.addEdges('Ron', 'Lee');
  graph.addEdges('Ron', 'Jeff');
  

graph.showNodes();
console.log(graph.bfs("Tim", "Jeff"));
console.log(graph.dfs("Tim", "Jeff"));
console.log(graph.dfsIterative("Tim", "Jeff"));