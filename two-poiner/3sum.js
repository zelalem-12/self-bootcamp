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



function hashMap(first, second, third){
    return [
          `${first}${second}${third}`,
          `${second}${first}${third}`,
          `${third}${second}${first}`,
          `${first}${third}${second}`,
          `${second}${third}${first}`,
          `${third}${first}${second}`,
      ]     
  }
  
  function searchPairSum(nums, tempTarget, triplets, leftPointer, originalTarget, hash){
      let rightPointer = nums.length - 1;
      
      while(leftPointer, rightPointer){
          const pairSum = nums[leftPointer] + nums[rightPointer];
          if(tempTarget === pairSum){
              const checks  = hashMap(originalTarget - tempTarget, nums[leftPointer], nums[rightPointer]);
              if(checks.some(key =>hash[key])){
                  leftPointer++;
                  rightPointer--;
                  while(leftPointer < rightPointer && nums[leftPointer] === nums[leftPointer - 1]) leftPointer++;
                  while(leftPointer < rightPointer && nums[rightPointer] === nums[rightPointer + 1]) rightPointer--;  
              } else {
                  triplets.push([originalTarget - tempTarget, nums[leftPointer], nums[rightPointer]]);
                  checks.forEach(check =>hash[check] = true)
                  leftPointer++;
                  rightPointer--;
                  while(leftPointer < rightPointer && nums[leftPointer] === nums[leftPointer - 1]) leftPointer++;
                  while(leftPointer < rightPointer && nums[rightPointer] === nums[rightPointer + 1]) rightPointer--;   
              } 
          } else if(tempTarget > pairSum) leftPointer++;
          else rightPointer--;
      }
  }
  
  
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  function threeSumNoneZere(nums, target) {
      
      nums.sort((a, b) => a - b)
      
      const triplets = [];
      const hash = {}
      
      for(let i = 0; i < nums.length; i++){
          if(i > 0 && nums[i] === nums[i - 1]) continue;
          
          const tempTarget = target - nums[i];
          console.log(tempTarget)
          // a + b + c = target,  a + b = target - c 
          searchPairSum(nums, tempTarget, triplets, i + 1, target,hash);
      }  
      console.log(triplets)
  };