function findPairNaive(nums, target){
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] >= target) return [nums[i], nums[j]];
        }
    }
    return null
}

// Asume the array is already in a sorted order 
function findPairTwoPointer(nums, target){

    let i = 0, j = nums.length - 1;

    while(i < j){
        const currentSum = nums[i] + nums[j];
        if( currentSum === target) return [nums[i],nums[j]]
        if(currentSum < target) i++;
        else j--;
    }
    return null;
}



console.log(findPairNaive([1, 2, 3, 4, 5], 7));  //[3, 4]  [2, 5]
console.log(findPairNaive([1, 6, 8, 9, 10], 14))// [6, 8]

console.log(findPairTwoPointer([1, 2, 3, 4, 5], 7));  //[3, 4]  [2, 5]
console.log(findPairTwoPointer([1, 6, 8, 9, 10], 14))// [6, 8]
console.log(findPairTwoPointer([1, 6, 8, 9, 10], 20))// null