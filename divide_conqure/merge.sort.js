const {dataSet} = require('../data');

function merge_sort(nums){
  
function _merge(leftList, rightList){
    const result = [];
    let left_index = 0, right_index = 0;

    while(left_index < leftList.length && right_index < rightList.length){
        if(leftList[left_index] < rightList[right_index]){
            result.push(leftList[left_index]);
            left_index++;
        }
        else {
            result.push(rightList[right_index]);
            right_index++;
        }
    }
    while(left_index < leftList.length){
        result.push(leftList[left_index]);
        left_index++;
    }
    while(right_index < rightList.length){
        result.push(rightList[right_index]);
        right_index++;
    }
    return result;
}

function _merge_sort(nums){
    if(nums.length === 1) return nums;
    const middleIndex = Math.floor(nums.length / 2);
    return _merge(_merge_sort(nums.slice(0, middleIndex)), _merge_sort(nums.slice(middleIndex)));
}

return _merge_sort(nums)
}

console.time('merge_sort');
console.log(merge_sort(dataSet));
console.timeEnd('merge_sort');