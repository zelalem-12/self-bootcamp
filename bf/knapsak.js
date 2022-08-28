function buildData(){
    const num = Math.floor(Math.random() * 100);
    const knapsakInput = []
    for(let i =0; i < num; i++){
        knapsakInput.push({
            weight: Math.floor(Math.random() * 100),
            value: Math.floor(Math.random() * 100)
        })
    }
    return knapsakInput;
    }
    
    
    
    function knapsakMaper(weights, values){
        const knapsakInput = []
        for(let i =0 ; i < weights.length; i++){
            knapsakInput.push({weight:weights[i], value:values[i]})
        }
        return knapsakInput;
    }


function getAllSubsets(items){
   const subsets = [[]];
   for(const item of items){
    const prevSubsets = [...subsets];
    for(const subset of prevSubsets){
        subsets.push([...subset, item])
    }
   }
   return subsets;
}


function getAllSubsetsFast(items){
    const  subset = [];
    function subsetSub(subset, items, output, index){
        if(index === items.length){
            subset.push(output);
            return;
        }
        subsetSub(subset, items, [...output], index + 1);
        subsetSub(subset, items, [...output,items[index]], index + 1);
    }
    subsetSub(subset,items,[],0);
    return subset;
}


const getAllSubsetsShort= items => items.reduce((subsets, item) =>  subsets.concat(subsets.map(set=> [...set, item])), [[]]);

console.log(getAllSubsets([1, 2, 3]));
console.log(getAllSubsetsShort([1, 2, 3]));
console.log(getAllSubsetsFast([1, 2, 3]));