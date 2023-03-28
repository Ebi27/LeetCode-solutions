/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// we need to return k num of elements. for example if k = 4, we return the 4 most frequent elements

//check if the length is just 1, and return nums 
// declare a hashmap to keep track of the number of elements 
// then check for the highest numbers of frequency that equals k 
//return them 

var topKFrequent = function(nums, k) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const entries = Array.from(map.entries());
  entries.sort((a, b) => b[1] - a[1]);
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(entries[i][0]);
  }
  return result;
    
};