/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

//declare start point 
//declare end point 
//loop through 
//declare mid point 
//check if mid is less than target, increment start point 
//check if mid is greater than, decrement end point 
// if equal then return the index of both numbers that add up to target number plus 1 'added by one'
//else return -1 

//remember it is 1 indexed 

const twoSum = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        let sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};

//time complexity O(n)
//space complexity O(n)