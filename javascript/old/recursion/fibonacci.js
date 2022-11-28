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


function memorizedrecursive(n, cache=[]){
        if(n <= 1 )return n;
        if(cache[n] )return cache[n];
        return cache[n] = memorizedrecursive(n - 1, cache) + memorizedrecursive(n - 2, cache)
    }

function memorizedIterative(n){ // Also called bottom_up approach
    let second = 0, first = 1;
    for(let i = 2; i <= n; i++){
        temp = first + second;
        second = first;
        first = temp;
    }
    return first;
}

const num = 30;

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