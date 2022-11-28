/**
 * @param {number} distances
 * @param { boolean} visitedSet
 * @return {int } 
 * 
 * */ 

function getMinDistanceVertices(distances, visitedSet){
    
    let minDistance = Number.POSITIVE_INFINITY;
    let position = -1;

    for(let i = 0;i < distances.length;i++){
        if(visitedSet[i] && distances[i] < minDistance){
            minDistance = distances[i];
            position = i;
        }
    }
    return position;
}


/**
 * @param {number [][]} graph
 * @param {Vertices}  source
 * @return {void }
* 
* */

// Adjacency Matrics representation graph
function SortestPath(graph, source){

    const vertices = graph.length;
    const visitedVerticesSet = new Array(vertices);
    const sourceDistances = new Array(vertices);

    // Initialze all vertices as not visited and distance as INFINITE 
    // Except Distance of source vertex from itself is always 0
    for(let v = 0; v < visitedVerticesSet; v++){
        visitedVerticesSet[v] = false;
        sourceDistances[v] = Number.POSITIVE_INFINITY;
    }
    sourceDistances[source] = 0;


    //Pic vertice and explor its neboughers excluding the last vertices since all its nebours are already visted;
    for(let i = 0; i < vertices - 1; i++){
        
        const currentVerticesIndex = getMinDistanceVertices(sourceDistances, visitedVerticesSet);
        visitedVerticesSet[currentVerticesIndex] = true;
        
        for(let v = 0; v < vertices; v++){
            if(
                !visitedVerticesSet[v] && 
                graph[currentVerticesIndex][v] !== 0 &&
                sourceDistances[currentVerticesIndex] !== Number.POSITIVE_INFINITY &&
                sourceDistances[currentVerticesIndex] + graph[currentVerticesIndex][v] < sourceDistances[v]
                ){
                    sourceDistances[v] = sourceDistances[currentVerticesIndex] + graph[currentVerticesIndex][v]
                }
            }
        }
    }
