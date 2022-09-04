/* 
           A ----------  B
           -         -
           -      C
           -  -     -
           D -----------E



*/

//================================Vertices and Edge Lists ================================


const vertices = ["A", "B", "C", "D", "E"];
const edges = [
    ["A", "B"],
    ["A", "D"],
    ["B", "C"],
    ["C", "D"],
    ["C", "E"],
    ["D", "E"]
];

// Find adjacent nodes.
// loop through the edges array 
// is my node in the connection 
// if yes push the other node in the pair to the adjacentNodes array
// if no keep going 
function findAdjacentNodes(node){
const adjacentNodes = [];

for(const edge of edges){
    const nodeIndex = edge.indexOf(node);
    if(nodeIndex > -1){
         const adjacentNode = nodeIndex ===1? edge[0]: edge[1];
         adjacentNodes.push(adjacentNode);
    }
}

return adjacentNodes;
}

// Is the two nodes connected

const isConnected =(nodeOne, nodeTwo) => 
 edges.some(edge => edge.indexOf(nodeOne) > -1 && edge.indexOf(nodeTwo) > -1);


console.log(findAdjacentNodes("A"));
console.log(findAdjacentNodes("C"))
console.log(findAdjacentNodes("E"))


console.log(isConnected("A", "C"));
console.log(isConnected("B", "C"))


//================================ Adjacency Matrix ================================


const adjacencyMatric = [
[0, 1, 0, 1, 0],
[1, 0, 1, 0, 0],
[0, 1, 0, 1, 1],
[1, 0, 1, 0, 1],
[0, 0, 1, 1, 0]
]


const verticesMap = {"A":0, "B":1, "C":2, "D":3, "E":4};


// find adjacentNodes

function findAdjaceentNodesMatric(node){
    const adjacentNodes = [];
    const nodeIndex = verticesMap[node];
    for(let i = 0; i < vertices.length && nodeIndex > -1; i++){
        if(adjacencyMatric[nodeIndex][i] === 1) adjacentNodes.push(vertices[i]);
    }
    return adjacentNodes;
}


function isConnectedMatric(nodeOne, nodeTwo){
    const indexOne = verticesMap[nodeOne];
    const indexTwo = verticesMap[nodeTwo];
    return !!adjacencyMatric[indexOne][indexTwo];
}

console.log(findAdjaceentNodesMatric("A"));
console.log(findAdjaceentNodesMatric("C"))
console.log(findAdjaceentNodesMatric("E"))


console.log(isConnectedMatric("A", "C"));
console.log(isConnectedMatric("B", "C"))




// ================================ Adjacency Matrix ================================



class Node{
    constructor(val){
        this.value = val;
        this.edgesList = []
    }
    connect(node){
        this.edgesList.push(node);
        node.edgesList.push(this)
    }
    adjacentNodes(){
        return this.edgesList.map(node => node.value)
    }
    isConnected(node){
        return this.edgesList.map(edge => edge.value).indexOf(node.value) > -1
    }
}


class Graph{
    constructor(nodes){
        this.nodes = [...nodes]
    }
    addToGraph(node){
        this.nodes.push(node)
    }
}
const nodeA =  new Node('A');
const nodeB =  new Node('B');
const nodeC =  new Node('C');
const nodeD =  new Node('D');
const nodeE =  new Node('E');



const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);

nodeA.connect(nodeB);
nodeA.connect(nodeD);
nodeB.connect(nodeC);
nodeC.connect(nodeD);
nodeC.connect(nodeE);
nodeD.connect(nodeE);

for(const node of graph.nodes){
console.log(`Node ${node.value}`);
for(const connectedNode of node.edgesList){
    console.log(`Node ${node.value} is conneted to ${connectedNode.value}`)
}
}

console.log(nodeC.adjacentNodes());
console.log(nodeA.isConnected(nodeC));
console.log(nodeB.isConnected(nodeC))


/* 
1# directed and undirected graph
1# weighted and unweighted graph
*/