/* 
After comparing the key elements to the left shifts elements which is greater than the current key element
 to make a room for the key element or new value at the correct place.

 Insertion sort is O(n) for already sorted list in ascending order
 Insertion sort is ideal for sorting a linked list
 Insertion sort is aproprite sorting algorithm for partially sorted lists
 Nice for samll data sets 
*/
//  What is Binary Insertion Sort?

// Initally the sorted list contains the first elemnt 
function InsertionSort(items){
    for(let i = 1; i < items.length; i++){
        const key = items[i];
        let j = i - 1;
        while(j >= 0 && items[j] > key){ 
            items[j + 1] = items[j];
            j--
        }
        items[j + 1] = key;
    }

    return items;
}

console.log(InsertionSort([2, 5,-3, 6,1,4]))