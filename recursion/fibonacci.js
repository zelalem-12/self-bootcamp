function recursive(n){
    if(n <= 1 )return n
    return recursive(n - 1) + recursive(n - 2)
}


function iterative(n){
    let second = 0;
    let first = 1;
    let current;
    for(let i = 2; i <= n; i++){
       current = first + second;
       second = first;
       first = current;
    }
    return current;
}

let iCache = [];
function memorizedrecursive(n){
        if(n <= 1 )return n;
        if(iCache[n] )return iCache[n];
        return iCache[n] = memorizedrecursive(n - 1) + memorizedrecursive(n - 2)
    }

function memorizedIterative(n){ // Also called bottom_up approach
    const cache = Array(n + 1).fill(-1);
    cache[0] = 0;
    cache[1] = 1;

    for(let i = 2; i <= n; i++){
        cache[i] = cache[i - 1] + cache[i - 2]
    }
    return cache[n]
}

const num = 1000;

// console.time('testR')

// console.log(recursive(num))

// console.timeEnd('testR')


console.time('SimpleIterative')

console.log(iterative(num))

console.timeEnd('SimpleIterative')

console.time('CachedRecursive')

console.log(memorizedrecursive(num))

console.timeEnd('CachedRecursive')

console.time('CachedIterative')

console.log(memorizedIterative(num))

console.timeEnd('CachedIterative')