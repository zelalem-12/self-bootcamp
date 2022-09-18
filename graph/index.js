/**
 * Weighted directed graph ajacency matrics representation
 * 
 * 
 * 
 */





/**
 * @param { number} nodeSize
 * @param {number [][]}  edges 
 * @return {void }
*/

function buildWeightedDirectedGraphFromEdegs(nodeSize, edges){

    const graph = new Array(nodeSize);
    for(let i = 0; i < nodeSize; i++){
        graph[i] = Array(nodeSize).fill(0);
    }
    for(let i = 0; i < edges.length; i++){
        const [startNode, endNode, weight] = edges[i];
        graph[startNode - 1][endNode - 1] = weight;

    }
    console.log(graph.join('\n'))
}


// Driver code
const edges = [[2,1,4],[2,3,6],[3,4,7]];
const n = 4;

buildWeightedDirectedGraphFromEdegs(n, edges);

/*
[ 
[ 4, 0, 6, 7 ], 
[ 4, 0, 6, 7 ], 
[ 4, 0, 6, 7 ], 
[ 4, 0, 6, 7 ]
]


*/