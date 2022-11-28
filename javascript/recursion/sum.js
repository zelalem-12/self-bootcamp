// Naive Recursive implementation for Array sum using recursive function
function recursionSum(array){
if(array.length === 0) return 0;
return array[0] + recursionSum(array.slice(1))
}


// Think about helper functino when you are required to implement recursive call;
function recursionSumFast(array){
    function _sum(index){
        if(index === array.length) return 0;
        return array[index] + _sum(index + 1)
    }
    return _sum(0)
}


console.log(recursionSum([1, 5, 7, -2]));
console.log(recursionSum([6, 3, 1]));
console.log(recursionSumFast([1, 5, 7, -2]));
console.log(recursionSumFast([6, 3, 1]));