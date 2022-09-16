function getPermutations(arr){

    function _getPermutations(arr, left, right){
        if(left === right) {
            permutations.push([...arr]);
            return;
        };
        for(let i = left; i <= right; i++){
                _swap(arr,left, i);  // swap between the choosed position with every other positions
                _getPermutations(arr, left + 1, right);  
                _swap(arr,left, i);  // Undo the swap tp backtrack 
        }
    }
    const isUsed = {}
    const permutations = [];
    function _swap(arr, start, i){
        if(start !== i) {
            [ arr[start], arr[i]] = [arr[i], arr[start]];
        }
    }
    _getPermutations(arr, 0, arr.length - 1);
   return permutations;
}
// console.time('backtracking')
// console.log(getPermutations([1, 3, 2]));
// console.timeEnd('backtracking')


console.time('backtrack_deplicate')
console.log(getPermutations([1, 1, 2]));
console.timeEnd('backtrack_deplicate')

