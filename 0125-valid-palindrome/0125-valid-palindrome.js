/**
 * @param {string} s
 * @return {boolean}
 */

//remove all spaces and special characters characters 
// change all to lower case 
// loop through s backwards and forward
// check if they are the same 
// return false otherwise 
// increment forward, decrement backward 
//return true 

var isPalindrome = function(s) {
s = s.replace(/[^a-zA-Z0-9]/g, '');
  s = s.toLowerCase();
    
    for(let [i, j] = [0, s.length-1]; i < j;){
        if(s[i] !== s[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}


