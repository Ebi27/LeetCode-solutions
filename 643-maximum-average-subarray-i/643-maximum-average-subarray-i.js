/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


//Use sliding window technique 
//Declare sum  variable 
//Use a for loop to loop through k 
// nu s should be += i
//declare a new sum variable whih is equla the old sum variable 
// loop through the length of nums 
// new sum variable shpuld equal itself pkus nums [i + k ] - nums[i]
//check if new sum is greater than old sum 
// old sum should equal new sum
// return the old sum 

var findMaxAverage = function(nums, k) {
    let kSum = 0;
    for(let i=0;i<k;i++){
        kSum += nums[i];
    }
    let windowSum = kSum;
    for(let i=0;i<nums.length;i++){
        windowSum = windowSum + nums[i+k] - nums[i];
        if(windowSum > kSum){
             kSum = windowSum;
        }
    }
    return kSum/k;
};