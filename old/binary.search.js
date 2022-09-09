/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
  // Iteratibe implemlentation
 function iterativeBinarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right){
        const mid = Math.floor((left + right)/2);
        if(target === nums[mid]) return mid;
        else if(target < nums[mid]) right = mid - 1;
        else left =  mid + 1;
    }
    return -1;
    
};



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
  // Recursive implemlentation
  function recursiveBinarySearch(nums, target) {
    function _recursiveBinarySearch(nums, target, left, right){
        if(left > right) return -1;
        const mid = Math.floor((left + right)/2);
        if(target === nums[mid]) return mid;
        if(target < nums[mid]) return _recursiveBinarySearch(nums, target, left, mid - 1);
        else return _recursiveBinarySearch(nums, target, mid + 1, right);
    }
    return _recursiveBinarySearch(nums, target, 0, nums.length - 1)
};




nums = [5], target = 5


console.log(iterativeBinarySearch(nums, target));
console.log(recursiveBinarySearch(nums, target));
