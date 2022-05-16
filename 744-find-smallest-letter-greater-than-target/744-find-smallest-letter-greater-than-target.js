/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

var nextGreatestLetter = function(letters, target) {
    for(const letter of letters) {
        if(target < letter) {
            return letter
        }
    }
    
    return letters[0]
};

//time complexity O(n) 
//space complexity 0(1)

