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

// heapify the last element
function heapifyLastItem(arr, i){
    let parent = Math.floor((i - 1)/2);
    if(arr[i] > arr[parent]){
        [arr[i], arr[parent]] = [arr[parent], arr[i]];
        heapify(arr, parent);
    }
}
function heapifyRoot(arr, size, i){
    let largest = i; //assume that the lartest is the root initially
    const left =  2 * i + 1;
    const right = 2 * i + 2;

    if(left < size && arr[left] > arr[largest]){
        largest = left;
    }

    if(right < size && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest !== i){
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapifyRoot(arr, size, largest)
    }
}

function insertNode(arr, key){
    // first increase the size of the heap by 1;
    //  Insert the new element at the end of the array;
    // The newly inserted element may distort the properties of the heap for its parent.
    // To revert the distortion heapify the newly inserted element following bottom-up approach
    const newSize = arr.length + 1;
    arr[newSize - 1] = key;
    heapifyLastItem(arr, newSize - 1)

    return newSize;
}

// In heap deletion takes place at the first item mmeaning the max or min item depending the type of the  heap
// remote and heapify because removing the firt item may distort the heap
function deleteNode(arr){
    const size = arr.length;

    arr[0] = arr[size - 1];
    // Reomve the last element
    arr.pop();
    heapifyRoot(arr, size - 1, 0);
    return size - 1;
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
  // recursive: insertNode(arr, 15),
  deleted: deleteNode(arr),
    heap:arr.toString()
}
console.log(data)