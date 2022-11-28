/**
 * @param {number[][]} isConnected
 * @return {number}
 */

// converting it into adjacency list then dfs
function findCircleNumList(isConnected) {
    
    //Convert the adjacency matrics representation into ajacanceny list
    const numberOfNodes = isConnected.length;
    const graph = {}
    
    for(let i = 0; i < numberOfNodes; i++){
        graph[i] = [];
        for(let j = 0; j < numberOfNodes; j++){
            if(i !== j &&  isConnected[i][j] === 1){
                graph[i].push(j);
            }
            
        }
    }
    const visited  = {};
    let provinces = 0;
    for(let i = 0; i < numberOfNodes; i++){
       
        if(visited[i]) continue;
        const stack = [i];
        provinces++;   
        while(stack.length !== 0){
            const curr = stack.shift();
            visited[curr] = true;
            const neighbors = graph[curr];
            for(let j = 0; j < neighbors.length; j++){
                if(!visited[neighbors[j]]  && !stack.includes(neighbors[j])){
                    stack.push(neighbors[j]);
                }
            }
        }
    }
    return provinces;
};



/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 function findCircleNum(isConnected) {
    
    //Convert the adjacency matrics representation into ajacanceny list
    const numberOfNodes = isConnected.length;
    
    const visited  = {};
    let provinces = 0;
    for(let i = 0; i < numberOfNodes; i++){
       
        if(visited[i]) continue;
        const stack = [i];
        provinces++;   
        while(stack.length !== 0){
            const curr = stack.shift();
            visited[curr] = true;
            for(let j = 0; j < numberOfNodes; j++){
                if(isConnected[curr][j] === 1 && !visited[j]  && !stack.includes(i)){
                    stack.push(j);
                }
            }
        }
    }
    return provinces;
};