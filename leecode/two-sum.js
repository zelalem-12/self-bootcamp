/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// brute force

 function merge(arr, left, middle, right){
    
    const leftSize = 1 + middle - left;
    const rightSize = right - middle;
    
    const leftNums = Array(leftSize);
    const rightNums = Array(rightSize);
    
    console.log(arr)
    for(let i = 0; i < leftSize; i++){
        leftNums[i] = [arr[left + i], left + i]
    }
   
    for(let i = 0; i < rightSize; i++){
        rightNums[i] = [arr[middle + 1 + i], middle + 1 + i]
    }
    
    
    
    let i = 0, j = 0, k = left;
    
    
    while(i < leftSize && j < rightSize){
        if(leftNums[i][0] <= rightNums[j][0]){
            arr[k] = leftNums[i];
            i++;
        } else {
            arr[k] = rightNums[j];
            j++
        }
        k++;
    }
    
    while(i < leftSize){
        arr[k] = leftNums[i];
        i++;
        k++
    }
    
    while(j < rightSize){
        arr[k] = rightNums[j];
        j++;
        k++
    }
    
    console.log(arr)
}



function mergeSort(nums, left, right){
    if(left >= right) return;

    const middle = left + Math.floor((right - left) / 2);
    
    mergeSort(nums, left, middle);
    mergeSort(nums, middle + 1, right);
    merge(nums, left, middle, right);
}


var twoSum = function(nums, target) {
    
    const size = nums.length;
    
    mergeSort(nums, 0, size - 1);
    
    //console.log(nums)
    let i = 0, j = size - 1;
    // while(i < j){
    //     const pairSum = nums[i] + nums[j];
    //       console.log({pairSum, target, i, j})
    //     if(pairSum === target) return [i, j];
        
    //     if(pairSum < target) i++;
    //     else j--;
    // }
};






function twoSumHashmap(nums, target){
    const map = {};
    
    for(let i = 0; i < nums.length; i++){
        if(map[target - nums[i]] !== undefined) return [i, map[target - nums[i]]];
        else map[nums[i]] = i;
    }  
    return [];
}

nums = [2,7,11,15], target = 9
console.log(twoSum(nums, target))
console.log(twoSumHashmap(nums, target));