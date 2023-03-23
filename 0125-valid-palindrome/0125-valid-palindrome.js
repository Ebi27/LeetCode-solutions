/**
 * @param {string} s
 * @return {boolean}
 */

//initialize two pointers one starting at the begining and the other at the end of the a end 
//remove all spaces and non-alphabets 
//turn the new string into lower letter 
//loop through and return true if they match 
//return false ifyou come across any mismatch 


var isPalindrome = function(s) {
  s = s.replace(/[^a-z0-9]/gi, '')
    s = s.toLowerCase()
    
    let start = 0; 
    let end = s.length-1;
    
    while(start < end){
        if(s[start] !== s[end]){ 
            return false;
    } else {
        start++
        end-- 
    }
    }
    return true;
    console.log(s)
};