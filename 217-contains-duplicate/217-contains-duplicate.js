/**
 * @param {number[]} nums
 * @return {boolean}
 */


// sort the numbers 
//unsorted = [1,2,3,1]
//sorted = [1,1,2,3]
//loop through the sorted nums 
// take our first element and check if its equal to our second element 
// if it is, then we return true , else false 


var containsDuplicate = function(nums) {
nums.sort(); 
    for(let i = 0; i <nums.length; i++){  
        if(nums[i] === nums[i + 1]) return true;
    }
    return false;
};


//time complexity o(log n)
//space complexity O(1) - we maintained the same space 