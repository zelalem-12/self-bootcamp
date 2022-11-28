/** 
 * @param { string } s
 * @param { string } t
 * @return {boolean} 
 * */ 

function isSubsequence(s, t){

    let sIndex = 0;
    let tIndex = 0;

    while(sIndex < s.length && tIndex < t.length){
        if(s[sIndex] === t[tIndex]) sIndex++;
        tIndex++;
    }

    if(sIndex === s.length) return true;
    return false;
}

const s = "axc";
const  t = "ahbgdc"

console.log(isSubsequence(s, t))