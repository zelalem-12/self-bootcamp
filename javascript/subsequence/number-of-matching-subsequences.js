/**
 * @param {string} 
 * @param { string[]} words
 * @return {number}
 * 
 */

//Bruth force approach 
function numberOfMatchingSubsequences(s, words){

    let numberOfMaching = 0;

    for(let i = 0; i < words.length; i++){
        const subSeq = words[i];
        subSeqIndex = 0;
        sIndex = 0;

        while(subSeqIndex < subSeq.length && sIndex < s.length){
            if(subSeq[subSeqIndex] === s[sIndex]) subSeqIndex++;
            sIndex++;
        }
        if(subSeqIndex === sIndex) numberOfMaching++
    }

    return numberOfMaching;
}



// When the array contains deplicate strings we don't need to calculate it again  in a longer string

function numberOfMatchingSubsequencesWithMap(s, words){

    let total = 0;
    
    const wordMap = {};
    for(let i = 0; i < words.length; i++){
        if(wordMap[words[i]]) wordMap[words[i]] += 1;
        else wordMap[words[i]] = 1;
    }

    for(word of Object.keys(wordMap)){
        let sIndex = 0;
        let wIndex = 0;

        while(wIndex < word.length && sIndex < s.length){
            if(word[wIndex] === s[sIndex]) wIndex++;
            sIndex++;
        }
        if(sIndex === s.length) total += wordMap[word]

    }

}
