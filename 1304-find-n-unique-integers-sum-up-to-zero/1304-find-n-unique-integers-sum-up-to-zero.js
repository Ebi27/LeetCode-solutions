/**
 * @param {number} n
 * @return {number[]}
 
 Examples 
 Input: n = 5
Output: [-7,-1,1,3,4]
 
 
 create an empty array 
 declare sum to zero 
 loop through n 
 
 */
var sumZero = function(n) {
    var arr = [];
var sum = 0;

for (let i = 1; i < n; i++) {
    arr.unshift(-i);
    
    sum += i;
}

arr.push(sum);
return arr;
};