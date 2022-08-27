function integerKnapsak(weight, profit, capacity){
    const numberOfObjects = weight.length;
   const cache = {};
    function ksSub(n, c){
        if(n === 0 || c === 0) return 0;
        const cacheKey = `${n}${c}`
       if(cache[cacheKey]) return cache[cacheKey]
        if(weight[n - 1] > c) return  ksSub(n - 1, c);
        return  cache[cacheKey] = Math.max(ksSub(n - 1, c), profit[n - 1] + ksSub(n - 1, c - weight[n - 1]));
    }
    return  ksSub(numberOfObjects, capacity);
}

console.log(integerKnapsak([1,2,4,2,5], [5,3,5,3,2], 10));