
function recursiveCombination(elements){
    const combinations = [];
    function _combination(elements, output, index){
        if(index === elements.length) combinations.push(output);
        else {
            _combination(elements, output, index + 1);
            const includedElement = elements[index];
            _combination(elements, [...output, includedElement], index + 1)
        }
    }
    _combination(elements, [], 0)
    return combinations;
}

console.log(recursiveCombination([2,1,3]));