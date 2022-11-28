
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
        const currentMaximum = getMax(nums[i], prevMaximum + nums[i]);
        globalMaximum = getMax(globalMaximum, currentMaximum);
        prevMaximum = currentMaximum;
    }
    return globalMaximum;
}


function maxSubArrayBruteForce(nums){
    if(nums.length === 1) return nums[0];   
    let globalMaximum = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < nums.length ; i++){
        let localMax = 0;
        for(let j = i; j < nums.length; j++){
            localMax += nums[j]; 
            if(localMax > globalMaximum) globalMaximum = localMax;
        }
    }
    return globalMaximum;
}


console.log(maxSubArrayBruteForce([-2,1,-3,4,-1,2,1,-5,4]))