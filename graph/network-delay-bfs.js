/**
A node to represent an edge 
* @params {Number} destination
* @params {number } the weight or connection size in time unit
* @return {Node}
*/

class Node{
    constructor(destination, weight){
        this.destination = destination;
        this.weight = weight;
    }
}

/*
This is  calss is used to represent a vertexe allong with thier distance from the source node;
@params {Number } vertex
*@params {Number} distance
@return {QueueNode}
*/

class QueueNode{
    constructor(vertex, distance){
        this.vertex = vertex;
        this.distance = distance;
    }
}

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function networkDelayTime(times, n, k) {
    // Use adjacency list representaion of a graph   this equivalent to 
    // 2D matics where the ith row is the vertex and jth row is the nuber of connection or edges 
    // Values represents the node which contains the destination vertex for that edge and the weight of the edge
    // Since its directed graph we don't nee to store verteces having no outgoing edges'
    
    const edgeSize = times.length;
    const adjGraph = {};
    
    for(let i = 0; i < edgeSize; i++){
        const [vertex, destination, weight] = times[i];
        const newNode = new Node(destination -1, weight);
        if(adjGraph[vertex - 1] === undefined) adjGraph[vertex - 1] = [newNode];
        else adjGraph[vertex - 1].push(newNode);
       
    }
    const distance = Array(n).fill(Number.POSITIVE_INFINITY);
    distance[k - 1] = 0;
    
    const queueNode = new QueueNode(k - 1, 0);

    const queue = [queueNode];    
    
    while(queue.length  > 0){
        const currentNode = queue.shift();
        const nodeEdges = adjGraph[currentNode.vertex] || [];
        for(let i = 0; i < nodeEdges.length; i++){
            const tempQueueNode = new QueueNode(nodeEdges[i].destination, currentNode.distance  + nodeEdges[i].weight);
            if(tempQueueNode.distance < distance[tempQueueNode.vertex]){
                queue.push(tempQueueNode);
                distance[tempQueueNode.vertex] = tempQueueNode.distance;
            }
        }
    }

    
    console.log(distance)
    
    let time  = 0;
    for(let i = 0 ; i < n; i++){
        if(!isFinite(distance[i])) return -1;
        
        if(distance[i] > time) time = distance[i];
    }
    
    return time;
};