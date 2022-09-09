// /**
//  * @param {number} startPos
//  * @param {number} endPos
//  * @param {number} k
//  * @return {number}
//  */
// function numberOfWays(startPos, endPos, k) {
//   console.log("are yoshfb")
//   const solution = Array(k+1).fill(Array(endPos).fill(0))
//   for (let  i = startPos; i <= k; i++) {
//     for (let  j = i + 1; j <= endPos; j++) {
//       if (i > 0)
//         solution[i][j] = (solution[i - 1][j - 1] + solution[i - 1][j + 1]) % 1000000007;
//       else
//         solution[i][j] = 1;
//     }
//   }
//     console.log(solution[k])
// };


// numberOfWays(1,2, 3);




/**
 * @param {number[]} nums
 * @return {number}
 */
function longestNiceSubarray(nums) {    
  const niceSubArray = {};
  function _longestNiceSubarray(nums, index){
    if(index === nums.length - 1) return 1;

  }
};