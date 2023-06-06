/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map()
    // map = { 1: 0, 2: 1, 3: 2, 1: 3 }

    for(let i = 0; i < nums.length; i++){
        const num = nums[i]
        const val = map.get(num)
        if(nums[val] === num && Math.abs(val - i) <= k){
            return true
        }
        
        map.set(num, i)
    }
    return false
};