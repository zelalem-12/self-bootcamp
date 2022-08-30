function permutation(nums){
    const result = [];
    function _permutation(index, nums){
        if(index === nums.length){    
            result.push([...nums]);
            return;
        } 
    for(let j = index; j < nums.length;j++){
        [nums[index], nums[j]] = [nums[j], nums[index]];
        _permutation(index + 1, nums);
         [nums[index], nums[j]] = [nums[j], nums[index]];
        }  
    }
     _permutation(0, nums);
    return result;
}

function permuteUnique(nums) {
    const result = [];
    function _permuteUnique(index, nums){
        if(index === nums.length){
            result.push([...nums]);
            return;
        }
        const hash = {};
        for(let j = index ; j < nums.length; j++){
            if(hash[nums[j]]) continue;
            hash[nums[j]] = true;
            [nums[index], nums[j]] = [nums[j], nums[index]];
            _permuteUnique(index + 1, nums);
              [nums[index], nums[j]] = [nums[j], nums[index]];
        }
    }
    _permuteUnique(0, nums);
    return result;
}



console.log(permutation(['a','c','b']));
console.log(permuteUnique(['a','a','b']))