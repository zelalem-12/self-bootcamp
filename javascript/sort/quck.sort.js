
/* 
Impelemntation details

 
#1.Choosing a pivot
    1. Choosing the last element
    2. Choosing the first element
    3. Choosing the middle elment
    4. Coosing the an elemnt randomly
    5. Median of the three

Depending on the imput items nature this pivot choice has an impact on the performance of the quick sort

#2 Dealing with depliates
 3- way quick sort

*/

function quickSort(items){
// Require On helper funcion that recusively calls itself
// Quick sort sorts items in place ;
if(items.length <= 1) return items;
const left = 0;
const right = items.length - 1;

function _partition(arr, left, right){
    // A pivot item can be taken from at the beggining, middle, end or at any place from the list
    // In partitioning we use two index one for the current number to be examined J
    // I points to the last element that is less than the povot
    // All items from the begginig to I including I are less than the pivot
    // All elemnts between i(i excluded) and J are greater or equal to the pivot

    const pivot = arr[right];

    // let randomIndex = math.flor(Math.rand()) + 1;
    // swap value at randomindex with the rith value the the partion lofic goes as well;
    // [arr[randomIndex], arr[right]] =[arr[right], arr[randomIndex]]


    let i = left - 1; // i is set one less than the first element and j runs from the first to one less than the last item

    for(let j = left; j <  right; j++){ // go throght the elements of the items untill one elemnt before the pivot
        if(arr[j] < pivot){
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    }
    i++;
    [arr[i], arr[right]]  = [arr[right], arr[i]] // Finally swap the pivot with one i aftr incremantingn
    return i;

}

function _quickSort(arr, left, right){
    if(left >= right) return 
    const pivot = _partition(arr, left, right); // Find and return the correct place for the pivot item
    _quickSort(arr, left, pivot - 1); // Sorting all items in the left side of the item
    _quickSort(arr, pivot + 1, right); // Sorting all items in the right side of the item
}
_quickSort(items, left, right);
return items;
}


console.log(quickSort([1, 4, 87,-81,-2, 5, 7, 3]));