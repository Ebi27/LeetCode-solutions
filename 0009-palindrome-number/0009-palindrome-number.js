/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){ 
        //if it's less than 0
        return false
    }
    if(x < 10){
        return true
    }
    
    let reversed = 0, original = x
    while(x > 0) {
      let remainder = x % 10
      reversed = (reversed * 10) + remainder
      x = Math.floor(x / 10)
    }

    return original === reversed
};


