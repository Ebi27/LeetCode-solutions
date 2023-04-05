/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(isPalindrome(s)){
        return s
    }
    let longestPalindrome = ''
    for(let i = 0; i < s.length; i++){
        for(let j = i; j < s.length; j++){
            let subStr = s.substring(i, j + 1)
            if(isPalindrome(subStr) && subStr.length > longestPalindrome.length){
                longestPalindrome = subStr
            }
        }
    }
    return longestPalindrome
};

const isPalindrome = (s)=>{
    let i = 0, j = s.length - 1
    while(i < j){
        if(s[i] !== s[j]){ // O(n)
            return false
        }
        i += 1
        j -= 1
    }
    return true
}