function searchPairSum(nums, target, leftPointer, triplets){
    let rightPointer = nums.length - 1;
    
    while(leftPointer < rightPointer){
        const pairSum = nums[leftPointer] + nums[rightPointer];
        if(target === pairSum){
            triplets.push([-target, nums[leftPointer], nums[rightPointer]])
            leftPointer++;
            rightPointer--;
            while(leftPointer < rightPointer && nums[leftPointer] === nums[leftPointer - 1]) leftPointer++;
            while(leftPointer < rightPointer && nums[rightPointer] === nums[rightPointer + 1]) rightPointer--;
        } else if(target > pairSum){
            leftPointer++;
        } else rightPointer--;
    }
}


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    

    
    nums.sort((a, b) => a - b);
    
    const triplets = [];
    
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        const target = -nums[i];
        searchPairSum(nums, target, i + 1, triplets)
    }
    
    return triplets;
};