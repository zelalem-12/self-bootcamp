function getPermutations(arr){
    const permutations = [];
    function _getPermutations(arr, left, right){
        if(left === right) {
            permutations.push([...arr]);
            return;
        };
        for(let i = left; i <= right; i++){
            [ arr[left], arr[i]] = [arr[i], arr[left]]; 
            _getPermutations(arr, left + 1, right);
            [ arr[left], arr[i]] = [arr[i], arr[left]]; 
        }
    }
    _getPermutations(arr, 0, arr.length - 1);
   return permutations;
}
console.log(getPermutations([1, 3, 2]));


/* 
arr  = [1, 2, 3]
Generating a permutation 
At each position we have n number options to take  here at first postion I can take 
    either 1, 2, 3 at postion 0 I have n options from items at 0 to items at n - 1;

    if we choose something at position 0 next we have to from the remainig items 
    from 1 on the way to n - 1;

    it continues 

    [1, 2, 3]


                            start

            1                   2                 3                call at n times 

    2          3            1        3          2       1             call at n - 1 time 
   
3                2        3              1     1            2           call at n - 2

*/
