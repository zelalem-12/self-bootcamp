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
    
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */


function LCS(str1, str2){

    const s1 = str1.length;
    const s2 = str2.length;

    const solutions = [];

    for(let i = 0; i < s1 + 1; i++){
        solutions[i] = Array(s2 + 1).fill(0);
    }


    for(let i = 1; i < s1  + 1; i++){
        for(let j = 1; j < s2 + 1; j++){
            if(str1[i - 1] === str2[j - 1]){
                solutions[i][j] = 1 + solutions[i - 1][j - 1];
            } else solutions[i][j]  = Math.max(solutions[i -1][j], solutions[i][j - 1]);
        }
    }
    return solutions[s1][s2];
}

/**
 * @param {string} s
 * @return {number}
 */

function longestPalindromeSubseq(s) {
    
    const str1 = s;
    const str2 = s.split("").reverse().join('');
    
    const s1 = str1.length;
    const s2 = str2.length;

    const solutions = [];

    for(let i = 0; i < s1 + 1; i++){
        solutions[i] = Array(s2 + 1).fill(0);
    }


    for(let i = 1; i < s1  + 1; i++){
        for(let j = 1; j < s2 + 1; j++){
            if(str1[i - 1] === str2[j - 1]){
                solutions[i][j] = 1 + solutions[i - 1][j - 1];
            } else solutions[i][j]  = Math.max(solutions[i -1][j], solutions[i][j - 1]);
        }
    }
    return solutions[s1][s2];
}


console.log(longestCommonSubsequence('ABCDGH', "AEDFHR"));
console.log(LCS('ABCDGH', "AEDFHR"));