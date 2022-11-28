function treeRec(n){
    console.log(n)
    if(n > 0){
    console.log(n);
    treeRec(n - 1);
    treeRec(n - 1);
}
}

treeRec(3);
console.log('Minshe')