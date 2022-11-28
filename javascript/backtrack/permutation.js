function getPermutations(arr){

    function _getPermutations(arr, left, right){
        if(left === right) {
            permutations.push([...arr]);
            return;
        };
        for(let i = left; i <= right; i++){
                _swap(arr,left, i);  // swap between the choosed position with every other positions
                _getPermutations(arr, left + 1, right);  
                _swap(arr,left, i);  // Undo the swap tp backtrack 
        }
    }
    const isUsed = {}
    const permutations = [];
    function _swap(arr, start, i){
        if(start !== i) {
            [ arr[start], arr[i]] = [arr[i], arr[start]];
        }
    }
    _getPermutations(arr, 0, arr.length - 1);
   return permutations;
}

function permutationsUsingBacktracking(nums){
    function _permute(nums, permutations, currenPermutation, used){
        if(currenPermutation.length === nums.length){
            permutations.push([...currenPermutation]);
            return;
        }
        for(let i = 0; i < nums.length; i++){ 
            if(!used[nums[i]]){
                used[nums[i]] = true
                currenPermutation.push(nums[i]);
                _permute(nums, permutations, currenPermutation, used);
                used[nums[i]] = false;
                currenPermutation.pop();    
            }
        }
    }
    const permutations = [];
    _permute(nums, permutations, [], {});
    
    return permutations;
}


function permutationsUsingBacktrackingDulicates(nums){
    function _permuteUnique(nums, permutations, currentPermute, counts){
        if(currentPermute.length === nums.length){
            permutations.push([...currentPermute]);
            return;
        }
        for(const key in counts){
            if(counts[key] > 0){
                counts[key] -= 1;
                currentPermute.push(+key);
                _permuteUnique(nums, permutations,currentPermute, counts);
                counts[key] += 1;
                currentPermute.pop();
            }
        }
    }
    
    const permutations = [];
    const counts = [];

    for(let i = 0; i < nums.length; i++){
        counts[nums[i]] = counts[nums[i]] !== undefined ? counts[nums[i]] += 1 : 1; 
    }
    
    _permuteUnique(nums, permutations, [], counts);
    
    return permutations;
}



// console.time('backtracking')
// console.log(getPermutations([1, 3, 2]));
// console.timeEnd('backtracking')


// console.time('backtrack_deplicate')
// console.log(getPermutations([1, 1, 2]));
// console.timeEnd('backtrack_deplicate')





console.time('backtrack_deplicateB')
console.log(permutationsUsingBacktrackingDulicates([1,1,3]));
console.timeEnd('backtrack_deplicateB')
