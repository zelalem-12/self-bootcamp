function uniqueSlow(items){
    const unique = []
    for(const item of items){
        if(!unique.includes(item)){
            unique.push(item)
        }
    }
    return unique; // o(n2)
}

function uniqueFast(items){
    const unique = new Set();
    for(const item of items) unique.add(item)
    return Array.from(unique); // o(n)
}

function uniqueShort(items){
    return [...new Set(items)]; // o(n)
}