/* 
The position of the left  child is parentPosition * 2 + 1 => LP = P * 2 + 1 => p = (LP - 1)/2;
The position of the right child is the parentPositino * 2 + 2   RP = P * 2 + 2 => p = (RP - 2)/2;

               88

             77    66
        55    44     

88, 55, 77, 22, 33, 44, 66, 11 
*/   

function iterativeNodeInsert(arr, key){
    let currentNodePosition = arr.length;
    while(currentNodePosition > 0){
        const parentPosition = Math.floor((currentNodePosition - 1) / 2);
        if(key <= arr[parentPosition]){
        arr[currentNodePosition] = key;
        return arr.length;
        }   
        arr[currentNodePosition] = arr[parentPosition];
        currentNodePosition = parentPosition;
    }
    arr[0] = key;
    return arr.length;
}




// A Function to heapify ith node  in aheap of size n(array.length;) following bottom up aproach

function heapify(arr, i){
    let parent = Math.floor((i - 1)/2);
    if(arr[i] > arr[parent]){
        [arr[i], arr[parent]] = [arr[parent], arr[i]];
        heapify(arr, parent);
    }
}


function insertNode(arr, key){
    // first increase the size of the heap by 1;
    //  Insert the new element at the end of the array;
    // The newly inserted element may distort the properties of the heap for its parent.
    // To revert the distortion heapify the newly inserted element following bottom-up approach
    const newSize = arr.length + 1;
    arr[newSize - 1] = key;
    heapify(arr, newSize - 1)

    return newSize;
}



const arr = []
arr[0] = 10;
arr[1] = 5;
arr[2] = 3;
arr[3] = 2;
arr[4] = 4;

const heap = [];

const data = {
   // iterativ: iterativeNodeInsert(arr, 15),
   recursive: insertNode(arr, 15),
    heap:arr.toString()
}
console.log(data)