/* 
Vertices and Edge Lists 

           A ----------  B
           -         -
           -      C
           -  -     -
           D -----------E



*/

const Vertices = ["A", "B", "C", "D", "E"];
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