/**
 * @param {number[]} nums
 * @return {boolean}
 */

//sort nums 
//check if the value at first index is same as the next through the array
//return true if yes and false if not 


var containsDuplicate = function(nums) {
    nums.sort();
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i + 1]){
            return true;
        }
    }
    return false;
};

//TC = O(N)
//SC = O(1)