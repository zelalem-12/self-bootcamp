function fibonacci(n){
    if(n <= 1 )return n
    return fibonacci(n - 1) + fibonacci(n - 2)
}


function memorizedFibonacci(n){
    const f  = Array(n + 1).fill(0);
    f[1] = 1;

    for(let i = 2; i <= n; i++){
        f[i] = f[i - 1] + f[i - 2]
    }
    return f[n]
}


console.time('test')

console.log(memorizedFibonacci(50))

console.timeEnd('test')