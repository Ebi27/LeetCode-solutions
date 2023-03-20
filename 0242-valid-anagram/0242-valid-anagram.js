/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//check if both are of the same length 
// if not, return false 
// creating an empty object  
// loop through the first anagram 
// check if the element of the index exists in the empty object 
// if it doesnt, increment the value in the obj to 1 
// then loop through the second anagram 
// check if the value of the index is already in the obj created 
// if it's not, then return false 
//else remove 1 from the obj 
//jump out of loop and return true 

// s = "anagram", t = "nagaram" 
//lets say t = nagram
// a; 3 , n: 1 , g: 1 , r: 1 , m: 1 
// a; 0 , n: 0 , g: 0 , r: 0 , m: 0




var isAnagram = function(s, t) {
   if(s.length !== t.length){
       return false;
   } 
    const lookup = {};  // O(1)
    
    for(let i = 0; i < s.length; i++){ //On 
        let letter = s[i];   //o(1)
        lookup[letter] ? lookup[letter] += 1 :lookup[letter] = 1;// o(1)
    }

    for(let i = 0; i < t.length; i++){ //o(n)
        let letter = t[i];   //O(1)
        if(!lookup[letter]) {  //o(1)
            return false;   //o(1)
        }else{
            lookup[letter] -=1;  //o(1)
        }
    }
    return true; 
};


//TC - O(n)
//SC - O(1) --- need to double check this 