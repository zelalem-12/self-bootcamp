/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 
function findMedianSortedArrays(nums1, nums2) {
    
    const result = []
    
    let i = 0, j = 0;
    
    while(i < nums1.length && j <  nums2.length){
        if(nums1[i] <= nums2[j]){
            result.push(nums1[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }
    
    while(i < nums1.length){
        result.push(nums1[i]);
        i++;
    }
    while(j < nums2.length){
        result.push(nums1[j]);
        j++;
    }
    
    let middle  = Math.floor((result.length - 1) / 2);
    console.log(middle)
    if(result.length % 2 === 0){
        return (result[middle]  + result[middle + 1]) / 2;
    }
    return result[middle];
    
};






console.log(findMedianSortedArrays([1, 3, 4, 6, 8], [1, 2, 5, 7])) // 1, 2, 3, 4, 5, 6, 7, 8