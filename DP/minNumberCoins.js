function changeMaking(target, denominations){
    const cache = {}
    function subproblem(t, i){
        if(cache[`${t}${i}`])  return cache[`${t}${i}`];
        const val = denominations[i];
        let intakeChoice = Number.POSITIVE_INFINITY;
        let leaveChoice = Number.POSITIVE_INFINITY;
    
        if(val < t) intakeChoice = 1 + subproblem(t - val, i);
        else if(val === t) intakeChoice = 1;

        if(i > 0) leaveChoice = subproblem(t, i-1)
        return cache[`${t}${i}`] = Math.min(intakeChoice, leaveChoice);
    }
    const result = subproblem(target, denominations.length - 1);
    return Number.isFinite(result)? result: -1
}


function makeChaneSub(subTarget, coins, cache){
    if(subTarget < 0) return -1;
    if(subTarget === 0) return 0;
    if(cache[subTarget - 1] !== 0) return cache[subTarget - 1];
    let optimalSolution  = Infinity;
    for(const coin of coins){
        const solutionUsingThisCoin =   makeChaneSub(subTarget - coin, coins, cache);
        if(solutionUsingThisCoin >= 0 && solutionUsingThisCoin < optimalSolution){
            optimalSolution = 1 + solutionUsingThisCoin;
        }
    }
    if(optimalSolution === Infinity){
        return cache[subTarget - 1] = -1;
    }
    return cache[subTarget - 1] = optimalSolution 
}



function makeChange(target, coins){
    const cache = Array(target).fill(0);
    return makeChaneSub(target, coins, cache)
}

console.log(changeMaking(28, [1, 5, 10]))
console.log(changeMaking(8,[1, 4, 6]))
console.log(changeMaking(16, [1, 5, 12, 19]))
console.log(changeMaking(33, [16,1, 25,5]))
console.log(changeMaking(31, [2,  10]));
console.log(changeMaking(78, [39, 3, 50, 25]));
console.log(makeChange(8, [4, 6,1]))