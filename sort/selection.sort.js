/* 
Divide the array into two halves sorted and unsorted 
inplace sorting 
Each iteration the minimum element is picked and swapped with the current elent 
Initally the sorted list is empty 
It is not adapive and its all elements are scanned regadless of the nature of the input
always quadratie time complexity 

*/



function SelectionSort(nums){
    for(let i = 0; i < nums.length - 1; i++){
        let min = i;
        for(let j = i+ 1; j < nums.length; j++){
            if(nums[j] < nums[min]){
                min = j;
            }
        }
        [nums[i], nums[min]] = [nums[min], nums[i]];
    }
    return nums;
}


console.log(SelectionSort([2, 4, 6, 3, -5,0,7]))