/**
 * @param {number[]} nums
 * @return {number}
 */


/*
start by sorting 
 examp 1 [100,4,200,1,3,2]
 sorted [1,2,3,4,100,200]
 output = 4
 
 [0,3,7,2,5,8,4,6,0,1]
 [0,1,2,3,4,5,6,7,8]
 
 []
 declare two variables to keep count and initialize to 1 
 loop through array
check if curr ele is not same as prev ele 
check if curr ele is consecutive to the prev ele 
if it is, increment the curr counter 
else find the max of the max count and curr count 
update the max count and reset the curr count 
*/

var longestConsecutive = function(nums) {
    if(nums.length == 0){ 
        return 0
    }
   nums.sort((a,b) => a - b) 
    console.log(nums)
    let maxCount = 1, currCount = 1
    
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i - 1]){
            if(nums[i] == nums[i - 1] + 1){
                currCount += 1 
            }else{
                maxCount = Math.max(currCount, maxCount)
                currCount = 1
            }
        }
    }
 console.log(maxCount, currCount)
    return Math.max(currCount, maxCount)
    
};


//TC = O(n log n) due to sorting 
//SC = O(1)