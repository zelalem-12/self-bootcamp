function fractionlKnapsak(items, capacity){
    items.sort((a, b) => b.value/b.weight - a.value/a.weight);

    let totalProfit = 0;
    for(const item of items){
        if(item.weight <= capacity){
            capacity -= item.weight;
            totalProfit +=item.value;
        }
        else {
            totalProfit += item.value * capacity/item.weight; 
            break;
        }
    }
    return totalProfit;
}




const capacity = 50;
const items = [{value:100, weight:20}, {value:120, weight:30}, {value:80, weight:50}, {value:60, weight:10}];


console.log(fractionlKnapsak(items, capacity))