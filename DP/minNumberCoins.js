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
    console.log(target)
    if(target !== 0) return - 1
    return subproblem(target, denominations.length - 1)
}



console.log(changeMaking(28, [1, 5, 10]))
console.log(changeMaking(8,[1, 4, 6]))
console.log(changeMaking(16, [1, 5, 12, 19]))
console.log(changeMaking(33, [16,1, 25,5]))
console.log(changeMaking(1, [2, 3, 10]))