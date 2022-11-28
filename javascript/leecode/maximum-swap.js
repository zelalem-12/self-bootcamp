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

function maximumSwapFast(num){
      if(num < 10) return num;
    
    const digits = num.toString().split('');    
    const digitLength = digits.length;

    const maxIndexs = Array(digitLength).fill(0);
    
    maxIndexs[digitLength - 1] = digitLength - 1;
    
    for(let i = digitLength - 2; i >= 0; i--){
        if(digits[maxIndexs[i + 1]] >= digits[i]){
            maxIndexs[i] = maxIndexs[i + 1];
        } else {
            maxIndexs[i] = i;
        }
    }  
    
    for(let i = 0; i < digitLength; i++){
        if(digits[maxIndexs[i]]  > digits[i]){
            [digits[i], digits[maxIndexs[i]]] = [digits[maxIndexs[i]], digits[i]];
            break;
        }
    }
    
    return +digits.join('');
}

console.log(maximumSwap(2736))