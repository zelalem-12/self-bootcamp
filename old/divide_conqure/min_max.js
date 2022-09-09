
const {dataSet} = require('../data');


function min_max_linear(nums){
    let min = Number.POSITIVE_INFINITY, max = Number.NEGATIVE_INFINITY;
    for(let num of nums){
        if(num > max) max = num;
        if(num < min) min = num;
    }
    return [min, max]
}


function min_max(nums){
    function _min_max(nums, start, end){
        if(start === end) return [nums[start], nums[end]];

        const startItem = nums[start];
        const endItem = nums[end]
        if(start === end - 1) return startItem > endItem ? [endItem, startItem]: [startItem, endItem];

        const midIndex = Math.floor((start + end)/2);

        // 0, 6 =>  return [7, 82]
               //         L: (0,3) =>  return [7, 55]
               //                      L (0, 1) => base case 2 elemnt  return [7, 33] pop out from the stack 
               //                      R  (2, 3) => base case two elements  reurn [44, 55] pop out from stack
               //                             
               //          R: (4, 6) =>  retrun [22, 82]
               //                         (4, 5)  base case 2 element return [22, 66]  popout from the stack
               //                          (6, 6) base case one elemen return [82, 82]  pop out from the stack




        // console.log({start, midIndex, end}) 
        const [leftMin, LeftMax] = _min_max(nums, start, midIndex); 0 
        const [RightMin, RightMax] =_min_max(nums, midIndex + 1, end);

      //  console.log({leftMin, LeftMax, RightMin, RightMax})
        return [leftMin <= RightMin ? leftMin : RightMin, LeftMax >= RightMax ? LeftMax : RightMax];

    }
    return _min_max(nums, 0, nums.length - 1);
}

const nums = [33, 7, 44, 55, 66, 22, 82]

console.time('linear');
console.log(min_max_linear(dataSet));
console.timeEnd('linear');

console.time('divide_conqure');
console.log(min_max(dataSet));
console.timeEnd('divide_conqure');

