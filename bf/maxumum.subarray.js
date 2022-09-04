const {dataSet} = require('../data')

/**
* @param {number[]} nums
 * @return {number}
*/

function maximumSubArraySum(nums){
    let maxSum = -Infinity;
    for(let i = 0; i < nums.length; i++){
        let localMax = 0;
        for(let j = i; j < nums.length ; j++){
            localMax += nums[j];
            if(localMax > maxSum){
                maxSum = localMax;
            }
        }
    }
    return maxSum;
}
const nums1 = [-2,1,-3,4,-1,2,1,-5,4];
const nums2 = [1];
const nums3 = [5,4,-1,7,8];
const nums4 = [-2,1,-3,4,-1,2,1,-5,4];
const nums5 = [1,2,3,-2,5]
// console.log(maximumSubArraySum(nums1))
// console.log(maximumSubArraySum(nums2))
// console.log(maximumSubArraySum(nums3));
// console.log(maximumSubArraySum(nums4))
// console.log(maximumSubArraySum(nums5))
console.time('start')
console.log(maximumSubArraySum(dataSet))
console.timeEnd('start')