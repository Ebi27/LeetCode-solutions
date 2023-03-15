/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

//needs to be sorted in non-decreasing order 
//merge both nums1 and nums2 into nums1 
// return nums1 


//loop through to check if there are any 0's 
// take them out 
//push nums2 into nums1
//sort it 
//

var merge = function(nums1, m, nums2, n) {
    let t2 = 0;  
   for(let i = 0; i < nums1.length; i++){ 
       if(i + 1 > m){ 
           nums1[i] = nums2[t2]; 
           console.log(nums2[t2])
           t2++
       }
   }
    return nums1.sort((a, b) => a - b);   
};

//TC = O(n log n)
//SC = O(1)