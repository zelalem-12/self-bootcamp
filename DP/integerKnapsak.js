function buildData(){
const num = Math.floor(Math.random() * 100);
const knapsakInput = []
for(let i =0; i < num; i++){
    knapsakInput.push({
        weight: Math.floor(Math.random() * 100),
        value: Math.floor(Math.random() * 100)
    })
}
return knapsakInput;
}



function knapsakMaper(weights, values){
    const knapsakInput = []
    for(let i =0 ; i < weights.length; i++){
        knapsakInput.push({weight:weights[i], value:values[i]})
    }
    return knapsakInput;
}


function integerKnapsak(knapsakInput, capacity){
    const numberOfObjects = knapsakInput.length;
   const cache = {};
    function ksSub(n, c){
        if(n === 0 || c === 0) return 0;
        const cacheKey = `${n}${c}`
       if(cache[cacheKey]) return cache[cacheKey]
        if(knapsakInput[n - 1].weight > c) return  ksSub(n - 1, c);
        return cache[cacheKey] = Math.max(ksSub(n - 1, c), knapsakInput[n - 1].value + ksSub(n - 1, c - knapsakInput[n - 1].weight));
    }
    return  ksSub(numberOfObjects, capacity);
}



// Bruthforace
//console.log(integerKnapsak(knapsakMaper([1,2,4,2,5], [5,3,5,3,2]), 10));
console.log(integerKnapsak(buildData(), Math.floor(Math.random() * 10000)));