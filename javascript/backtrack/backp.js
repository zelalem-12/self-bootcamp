function permutaion(nums){
    
    // Define base case
    if(nums.length === 1) return [[...nums]];


    const  result = [];

    console.log(nums)
    for(let i = 0; i < nums; i++){
        console.log('firstItem')
        const firstItem = nums.shift();
        
        const perms = permutaion(nums);
        
        for(perm of perms) perm.push(firstItem);
        result.concat(perms);
        nums.push(firstItem);
    }
    console.log('fll')
    return result;

}


console.time('backtrack_deplicate')
console.log(permutaion([1, 2, 3]));
console.timeEnd('backtrack_deplicate')

