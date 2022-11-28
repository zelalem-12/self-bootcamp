function selectionSort(items){
    const n = items.length;
    for(let i = 0; i < n - 1; i++){
        let minIndex = i;
        for(let j =  i + 1; j < n ; j++){
        if(items[j] < items[minIndex]){
            minIndex = j;
        }
    }
    if(minIndex !== i){
        const temp = items[i];
        items[i] = items[minIndex];
        items[minIndex] = temp;
    }
}
return items;
}

console.log(selectionSort([2, 3, 7,11, 6, 4, 8, 1, 9]))