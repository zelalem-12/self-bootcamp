function largestConcatenate(nums){
    let result = '';
    while(nums.length !== 0){
        let maxIndex = 0;
        for(let i = 1; i < nums.length; i++){
            if(nums[i] > nums[maxIndex]) {
                maxIndex = i;
            }
        }
        result = result + nums.splice(maxIndex, 1)
    }
    return result;

}

console.log(largestConcatenate([2, 21]))