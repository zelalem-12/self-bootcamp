
/**
 * @param {Number} a
 * @param { Number} b
 * @return {Number} 
 */

function getMax(numOne, numTwo){
    if(numOne >= numTwo) return numOne;
    return numTwo;
}

/**
 * @param {Numbers []}
 * @return {Number}
 *  */ 

function maxSubArray(nums){


    let globalMaximum = Number.NEGATIVE_INFINITY;

    let prevMaximum = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < nums.length; i++){
        prevMaximum = getMax(nums[i], prevMaximum + nums[i]);
        globalMaximum = getMax(globalMaximum, prevMaximum);
    }
    return globalMaximum;
}