/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
nums.sort();
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i + 1]){
            return true;
        }
    }
    return false;
};

//time complexity O(n) - because we searched linearly through the nums array 
//space complexity O(1) - we maintained the same space 