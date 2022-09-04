const {dataSet} = require('../data');

/**
 * 
 * @param {number[]} nums
 * @return {number}
 * 
 *  */ 
 //const nums3 = [5,4,-1,7,8];
function maximumSubArraySumFast(nums){
  // internal function to get the maximum of thow numers
  const getMax =(num1, num2) => num1 > num2 ? num1 : num2;
  let global_maximum = Number.NEGATIVE_INFINITY;
  let current_maximum_sum = 0;
  for(let i = 0; i < nums.length; i++){
      current_maximum_sum = getMax(nums[i], nums[i] + current_maximum_sum);
      global_maximum = getMax(current_maximum_sum, global_maximum);
  }
  return global_maximum;
}



/**
* @param {number[]} nums
 * @return {number}
*/

function maximumSubArraySum(nums){
    let global_maximum = -Infinity;
    for(let i = 0; i < nums.length; i++){
      let local_maximum = -Infinity;
        let sum = 0;
        for(let j = i; j < nums.length ; j++){
            sum += nums[j]; 
            if(sum > local_maximum){
                local_maximum = sum;
            }
        }
        if(local_maximum > global_maximum){
            global_maximum = local_maximum;
        }
    }
    return global_maximum;
}
/**
 * 
 * @param {number[]} nums
 * @return {number}
 * 
 *  */ 

function maximumSubArrayProduct(nums){
    let global_maximum = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < nums.length; i++){
        let local_maximum = Number.NEGATIVE_INFINITY;
        let product =1;
        for(let j = i; j < nums.length; j++){
             product *= nums[j];
            if(product > local_maximum){
                local_maximum = product;
            }
        }
        if(local_maximum > global_maximum){
            global_maximum = local_maximum;
        }
    }
    return global_maximum;
}

function maximumSubArrayProductFast(nums){
    const getMax = (num1, num2) => num1 > num2 ? num1 : num2;
    const getMin = (num1, num2) => num1 > num2 ? num2 : num1;
    let global_maximum = Number.NEGATIVE_INFINITY;
    let current_minimum_product  = 1;
    let current_maximum_product =  1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 0){
            [current_minimum_product,current_maximum_product] = [current_maximum_product,current_minimum_product];
        }
        current_minimum_product = getMin(nums[i], nums[i] * current_minimum_product);//2, 3, -12, -48, 
        current_maximum_product = getMax(nums[i], nums[i] * current_maximum_product); // 2, 6,  -2, 4
        global_maximum = getMax(current_maximum_product, global_maximum);
    }
    return global_maximum;
}



// const nums1 = [-2,1,-3,4,-1,2,1,-5,4];
// const nums2 = [1];
// const nums3 = [5,4,-1,7,8];
// const nums4 = [-2,1,-3,4,-1,2,1,-5,4];
// const nums5 = [1,2,3,-2,5]
// console.log(maximumSubArraySum(nums1))
// console.log(maximumSubArraySum(nums2))
// console.log(maximumSubArraySum(nums3));
// console.log(maximumSubArraySum(nums4))
// console.log(maximumSubArraySum(nums5))
// console.time('start')
// console.log(maximumSubArraySum(dataSet))
// console.timeEnd('start');

// console.log("========= Fast =========")

// console.log(maximumSubArraySumFast(nums1))
// console.log(maximumSubArraySumFast(nums2))
// console.log(maximumSubArraySumFast(nums3));
// console.log(maximumSubArraySumFast(nums4))
// console.log(maximumSubArraySumFast(nums5))
// console.time('start')
// console.log(maximumSubArraySumFast(dataSet))
// console.timeEnd('start');



const num6 = [2,3,-2,4];
const num7 = [-2,3,-4];
console.log(maximumSubArrayProduct(num6));
console.log(maximumSubArrayProduct(num7));
console.time('start')
console.log(maximumSubArrayProduct(dataSet))
console.timeEnd('start');

console.log("++++++++++++++++++++++++++")
console.log(maximumSubArrayProductFast(num6));
console.log(maximumSubArrayProductFast(num7));
console.time('start')
console.log(maximumSubArrayProductFast(dataSet))
console.timeEnd('start');