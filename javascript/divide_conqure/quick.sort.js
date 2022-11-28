function quickSortMiddle(nums){
 
    function _pivot(nums, left, right){
        let p = Math.floor((left + right) / 2);
        let j = right;
        let i = left;
        
        while(i <= j){
            while(nums[i] < nums[p]) i++;
            while(nums[j] > nums[p]) j--;
            if(i > j) break;
            [nums[i], nums[j]] = [nums[j],nums[i]];    
            i++;
            j--; 
        }
        return [i, j];
    }
    
   function _quickSort(nums, left, right){
    if(left >= right) return;
    const [i, j] = _pivot(nums, left, right);
    _quickSort(nums, left, j);
    _quickSort(nums, i,  right);
}
_quickSort(nums, 0, nums.length - 1);
 return nums;
}









function quickSortEnd(nums){
 
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

console.log(quickSortEnd(nums));
console.log(quickSortMiddle(nums));