/** 
 * @param {string} str
 * @return { string[]}
 * 
 * 
 */

function generateSubsequences(str){
    const subsequences = [];
    function _generateSubsequences(str, output){
        if(str.length === 0) {
            if(output !== ""){
                subsequences.push(output);
            }
            return;
        };
        _generateSubsequences(str.substring(1), output);
        _generateSubsequences(str.substring(1), output + str[0]);
    }
    _generateSubsequences(str,"")
    return subsequences;
}



console.log(generateSubsequences("abc"))