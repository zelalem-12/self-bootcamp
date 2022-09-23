/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

function longestCommonSubsequence(text1, text2) {
    
    const text1SubSequence  = [];
    const text2SubSequence = []
    
    
    function generateSubSequence(result, text, output=""){
        
        if(text.length === 0){
            if(output !== ""){
                result.push(output)
            }
            return;
        }
        
        generateSubSequence(result, text.substring(1), output);
        generateSubSequence(result, text.substring(1), output + text[0]);
        
    }
    
    generateSubSequence(text1SubSequence, text1, "");
    generateSubSequence(text2SubSequence, text2, "");


    
    let outer = text1SubSequence;
    let inner = text2SubSequence;
    
    if(text1SubSequence.length > text2SubSequence.length){
        outer = text2SubSequence;
        inner = text1SubSequence;
    
    }
    
    let count = 0;
    
    for(let i = 0; i < outer.length; i++){
        for(let j = 0; j < inner.length; j++){
            if(outer[i] === inner[j] && outer[i].length > count) {
                count = outer[i].length;
            }
        }
    }
    return count;
};
    