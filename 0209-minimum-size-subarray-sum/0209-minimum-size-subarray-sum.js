/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
   let sum = 0, minLength = Infinity, p1 = 0

   for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        sum += num

        while(sum >= target){
            minLength = Math.min(minLength, i - p1 + 1)
            sum -= nums[p1]
            p1 += 1
        }
   }

   return minLength !== Infinity ? minLength : 0
};