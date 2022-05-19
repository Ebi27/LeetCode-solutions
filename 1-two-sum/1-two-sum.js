/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
Example;
nums = [2,7,11,15], target = 9
Output: [0,1]

what if our nums does not have numbers that sums to our target ? 
nums = [2,7,11,15], target = 100
Output: "No match"
*/


//We initiate two pointers next to each other 
//declare a variable that sums left and right
// declare a result variable 



var twoSum = function(nums, target) {
    let left = 0;
    let right = left +1;
     let sum = nums[left] + nums[right];
    let result = null;
    
    while(true){
         sum = nums[left] + nums[right];
        if(sum === target){
           result = [left, right];
break;
        }
        right++;
        if (right >= nums.length){
            left++;
            right = left + 1;
        }
       if(left >= nums.length) break;
    }
    return result;
};

//Time complexity O(n)
//Space complexity O(1)



//Someone else's code that i like 
/*
let obj = {}
for (i=0;i<nums.length;i++){
    let found = target-nums[i]
    if(obj[found] != null){
        return [i,obj[found]]
    }else{
        obj[nums[i]] = i
    }
}
**Runtime: 64 ms, faster than 99.70% of JavaScript online submissions for Two Sum.
**Memory Usage: 38.6 MB, less than 72.51% of JavaScript online submissions for Two Sum.
*/