function largestConcatenate(nums){
    if(nums.length ===0) return'';

        let maxIndex = 0;
        for(let i = 1; i < nums.length; i++){
            if(nums[i] > nums[maxIndex]) {
                maxIndex = i;
            }
        }
        let maxValue =  nums.splice(maxIndex, 1)
    
    return maxValue + largestConcatenate(nums);

}

console.log(largestConcatenate([2, 4,2, 9, 3]))
console.log(largestConcatenate([2,21]))