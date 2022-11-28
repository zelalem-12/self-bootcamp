function isPalindromeSlow(string){
    const n = string.length;
    if(n === 1) return true;
    const ends = string[0] === string[n - 1]? true:false;
    return ends && isPalindrome(string.substring(1, n - 1));

}
// apa  a pp a  a pb a    Abc d    b    dc bA 

function isPalindrome(string){
    const n = string.length;
    function _isPalindrome(startIndex, endIndex){
       // Base case for Odd number strings
       if(startIndex === endIndex) return true;
       // Base case for Even number of Strings
       if( endIndex  === startIndex + 1){
           return string[startIndex] === string[endIndex] ? true:false;
       } 
   
       // Check if the last characters are identical
      const ends = string[startIndex] === string[endIndex]? true:false;
       return ends && _isPalindrome(startIndex + 1, endIndex - 1);
   }
   return _isPalindrome(0, n - 1)
}
// apa  a pp a  a pb a    Abc d    b    dc bA 




console.log(isPalindrome('redivider'));
console.log(isPalindrome('zelalem'));
console.log(isPalindrome('acppca'));


console.log(isPalindromeSlow('redivider'));
console.log(isPalindromeSlow('zelalem'));
console.log(isPalindromeSlow('acppca'));