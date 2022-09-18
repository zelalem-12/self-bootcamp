/**
 * @param {number} num
 * @return {number}
 */
function maximumSwap(num) {
    const  list = [];
    
    let temp = num;
    
    while(temp !== 0){
        list.unshift(temp % 10);
        temp = Math.floor(temp/10);
    }
    
    
    for(let i = 0; i < list.length - 1; i++){
        let largest = i;
        for(let j = i + 1; j < list.length; j++){
            if(list[j] >= list[largest]) largest = j;
        }
        if(list[largest] > list[i]){
            [list[i], list[largest]] = [list[largest], list[i]];
            break;
        }
    }
    
    return +list.join('');
};



console.log(maximumSwap(2736))