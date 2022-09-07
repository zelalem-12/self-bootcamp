function quickSort(nums){
 
    function _pivot(nums, left, right){
        let p = right;
        let j = left;
        let i = left - 1;
        
        while(j <= p){
            if(nums[j] < nums[p]){
                i++;
                [nums[i], nums[j]] = [nums[j],nums[i]];
            }
            j++;
        }
        i++;
        [nums[i], nums[p]] = [nums[p],nums[i]];
        return i;
    }
    
   function _quickSort(nums, left, right){
    if(left < right){
    const pivot_index = _pivot(nums, left, right);
    _quickSort(nums, left, pivot_index - 1);
    _quickSort(nums, pivot_index + 1, right);
    }
    return nums;
}
return _quickSort(nums, 0, nums.length - 1)
}





let nums = [5, 2, 3, 1]

console.log(quickSort(nums))