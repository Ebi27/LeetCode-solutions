/**
 * @param {number[]} nums
 * @return {boolean}
 */
// sort array 
//check if num in one index is same as num in the next array 
//return true if yes 
// iterate completely through the arr and return false if not 

var containsDuplicate = function(nums) {
    nums.sort()
    
  for(let i = 0; i < nums.length; i++){
      if(nums[i] === nums[i + 1]){
          return true; 
      }
  }
    return false; 
};


//tc = o(n)
//sc = o(1)