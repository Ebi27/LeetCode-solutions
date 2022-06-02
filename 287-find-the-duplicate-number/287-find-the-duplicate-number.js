/**
 * @param {number[]} nums
 * @return {number}
 */

// sort the numbers 
// loop through the length of the number 
// check if the present number is the same as the previous 
// return the number if it is 
// return -1 if it's not 

var findDuplicate = function(nums) {
nums.sort();
for(let i = 1; i < nums.length; i++){
if(nums[i] == nums[i - 1])
    return nums[i];
}
    rerturn -1;
};

//TC = O(n)
//SC = O(1)