/* 
At each iteration the largest element is bubbled to the left
At first the largest elment is bubbled to the right
At the second  iteration the second largest number is pushed to the right but the left of the first largest
and contines 

Divides the array inteo two halve sorted(the right side by pushing the large elements to the right ) 
and unsorted from the left side

At each  iteration ith element is compared to its next adjacent and swapped if the are in wrong order

ALl elements have to be bubbled to the right so the outer loop runs 0 to n - 
so the innter loop run untill the  n -2 th elemnt because the n - 1 (the last ) elemen doesn't have next 
adjancent elemnt

With each pass the largest elemnt in th unsorted part will be bubbled into the highest index to the unsorted 
half.
After n passes its granted that the items are sorted 


       // There is no swap in each pass that means all items are in the correct position
         // We need to beak out from the loop;

*/


function bubbleSort(nums){
    const n = nums.length;
    for(let i = 0; i < n ; i++){
         let isSwaped = false;
        for(let j = 0; j < n - 1; j++){
            if(nums[j] > nums[j + 1]){
                [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
                isSwaped = true;
            }
        }
        if(!isSwaped) break;
    }
    return nums;
}


console.log(bubbleSort([2, 7, -3, 6, 8, 4]))