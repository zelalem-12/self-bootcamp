/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
    
    const preHash = {};
    
    for(let i =0; i < nums.length; i++){
        const diff = target - nums[i];
        if(preHash[diff] !== undefined) return [preHash[diff], i];
        preHash[nums[i]] = i;
    }
    return null;
};