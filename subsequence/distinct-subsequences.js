/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 function numDistinctBruteForce(s, t) {
    
    function _numDistinct(str, start, count, output, t){
        if(start > str.length - 1){
            if(output.length !== 0 && output === t) return 1 + count;
            return count;
        }
        return _numDistinct(str, start + 1, count, output, t) +  _numDistinct(str, start + 1, count, output + str[start], t);
    }
    return _numDistinct(s, 0, 0, "",t);
};


function numDistinct(s, t) {
    
    const s1 = s.length;
    const s2 = t.length;
    
    const solutions = {};
    
    function _numDistinct(i, j){
        if(s2 === j) return 1;
        if(s1 === i) return 0;
        if(solutions[`${i}${j}`]) return solutions[`${i}${j}`];
      
        if(s[i] === t[j]){
           return solutions[`${i}${j}`] = _numDistinct(i + 1, j + 1) + _numDistinct(i + 1, j);
        }
         return solutions[`${i}${j}`] = _numDistinct(i + 1, j);        
    }
    return _numDistinct(0, 0);
};


function numDistinctIterative(s, t) {
    
    const s1 = s.length;
    const s2 = t.length;
    
    const solutions = []
    
    solutions[0] = Array(s1 + 1).fill(1);
    for(let i = 1; i < s2 + 1; i++){
        solutions[i] = Array(s1 + 1).fill(0);
    }
    
    for(let i = 1 ; i <= s2; i++){
        for(let j = 1; j <= s1; j++){
            if(t[i - 1] === s[j - 1]) {
                solutions[i][j] = solutions[i - 1][j - 1] +  solutions[i][j - 1];
            }
            else {
                solutions[i][j] = solutions[i][j - 1] 
            }
        }
    }
   return solutions[s2][s1];
};

const s = "xslledayhxhadmctrliaxqpokyezcfhzaskeykchkmhpyjipxtsuljkwkovmvelvwxzwieeuqnjozrfwmzsylcwvsthnxujvrkszqwtglewkycikdaiocglwzukwovsghkhyidevhbgffoqkpabthmqihcfxxzdejletqjoxmwftlxfcxgxgvpperwbqvhxgsbbkmphyomtbjzdjhcrcsggleiczpbfjcgtpycpmrjnckslrwduqlccqmgrdhxolfjafmsrfdghnatexyanldrdpxvvgujsztuffoymrfteholgonuaqndinadtumnuhkboyzaqguwqijwxxszngextfcozpetyownmyneehdwqmtpjloztswmzzdzqhuoxrblppqvyvsqhnhryvqsqogpnlqfulurexdtovqpqkfxxnqykgscxaskmksivoazlducanrqxynxlgvwonalpsyddqmaemcrrwvrjmjjnygyebwtqxehrclwsxzylbqexnxjcgspeynlbmetlkacnnbhmaizbadynajpibepbuacggxrqavfnwpcwxbzxfymhjcslghmajrirqzjqxpgtgisfjreqrqabssobbadmtmdknmakdigjqyqcruujlwmfoagrckdwyiglviyyrekjealvvigiesnvuumxgsveadrxlpwetioxibtdjblowblqvzpbrmhupyrdophjxvhgzclidzybajuxllacyhyphssvhcffxonysahvzhzbttyeeyiefhunbokiqrpqfcoxdxvefugapeevdoakxwzykmhbdytjbhigffkmbqmqxsoaiomgmmgwapzdosorcxxhejvgajyzdmzlcntqbapbpofdjtulstuzdrffafedufqwsknumcxbschdybosxkrabyfdejgyozwillcxpcaiehlelczioskqtptzaczobvyojdlyflilvwqgyrqmjaeepydrcchfyftjighntqzoo";
const t = "rwmimatmhydhbujebqehjprrwfkoebcxxqfktayaaeheys";



console.time('iterative')
console.log(numDistinctIterative(s, t));
console.timeEnd('iterative')


console.time('recursives')
console.log(numDistinct(s, t));
console.timeEnd('recursives')