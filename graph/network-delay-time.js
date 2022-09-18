/**
 * @param {number[]} visitedNodes
 * @param {number} timeDistance
 * @return {number}
 */

 function getMinimumTimeDistanceNode(visitedNodes, timeDistances, n){
    
    let minimumTime = Number.POSITIVE_INFINITY;
    let position = -1;
    
    for(let i = 0; i < n; i++){
        if(!visitedNodes[i] && timeDistances[i] < minimumTime){
            minimumTime = timeDistances[i];
            position = i;
        }
    }
    return position;
}



/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

function networkDelayTime(times, n, k) {
    
    const graph = new Array(n);
    
    for(let i = 0; i < n; i++){
        graph[i] = Array(n).fill(0);
    }
    
    
    for(let time of times){
        const [sourceNode, targetNode, takingTime] = time;
        graph[sourceNode - 1][targetNode - 1] = takingTime;
    }
    
    const reachedNodes = Array(n).fill(false);
    const timeDistancesFromSource = Array(n).fill(Number.POSITIVE_INFINITY);
    
    
    for(let i = 0; i < n - 1; i++){

        timeDistancesFromSource[k - 1] = 0;
        const currentNode = getMinimumTimeDistanceNode(reachedNodes, timeDistancesFromSource, n);
        
        if(currentNode === -1) return -1;
        
        reachedNodes[currentNode] = true;
        
        
        for(let vertex = 0; vertex < n; vertex++){
            if(
                !reachedNodes[vertex] &&
                graph[currentNode][vertex] !== 0 && 
                timeDistancesFromSource[currentNode] !== Number.POSITIVE_INFINIFY &&
                timeDistancesFromSource[currentNode] + graph[currentNode][vertex] < timeDistancesFromSource[vertex]
            ){
                timeDistancesFromSource[vertex] = timeDistancesFromSource[currentNode] + graph[currentNode][vertex];
            }
        }
    }
    
    let maxTime = Number.NEGATIVE_INFINITY;
    
    for(const delay of timeDistancesFromSource){
        if(!isFinite(delay)) return -1;
        
        if(delay > maxTime) maxTime = delay;
    }
    
    return maxTime;
};

