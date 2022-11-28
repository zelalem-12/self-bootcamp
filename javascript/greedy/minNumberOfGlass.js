const iterative = (N, K) =>{
    let minGlass = 0;
    for(let i = N; i > 0 &&  K > 0; i--){
        if(K >= i){
        minGlass++;
        K = K - i;
        }
    }
    return K === 0? minGlass : -1
}


const recursive = (N, K, count) =>{
    if(K === 0) return count;
    if(K > 0 && N === 0 ) return - 1;
    return N > K ?recursive(N - 1, K, count): recursive(N - 1, K - N, ++count);
}



console.log(iterative(5, 10))   // 5,4,3,2,1    

console.log(recursive(5, 18, 0))   // 5,8(1)   4, 3,    3,3(1)    2, 0   1 +    + 1  0