/**
 * @param {number[]} nums
 * @return {number}
 */

function findUnsortedSubarray(nums) {
    
    const n = nums.length;
    
    let left = 0, right = n - 1;
    
    while(left < n - 1 &&  nums[left] <= nums[left + 1]) left++;
    if(left === n - 1) return 0;
    
    while(right > 0 &&  nums[right] >= nums[right  - 1]) right--;
    
    let min = Number.POSITIVE_INFINITY, max = Number.NEGATIVE_INFINITY;
    for(let i = left; i <= right; i++){
        if(nums[i] < min) min  = nums[i];
        if(nums[i] > max)  max = nums[i];
    }
    
    while(nums[left - 1] > min && left > 0) left--;
    while(nums[right + 1] < max && right < n - 1) right++;
    
    
    return right - left + 1;
};