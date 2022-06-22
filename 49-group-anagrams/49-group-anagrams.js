/**
 * @param {string[]} strs
 * @return {string[][]}
 */


//Check if it contains and empty string, if yes then return the string 
//create empty array 
//loop over the main array 
//declare a new variable and split, sort, and join string
//

    
 const groupAnagrams = function(strs) {
    let groups = {}
    strs.forEach(str => {
        const sortedStr = str.split('').sort().join('')
        if (groups[sortedStr]) {
            groups[sortedStr].push(str)
        } else {
            groups[sortedStr] = [str]
        }
    })
    return Object.values(groups)
};