class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        
       create an empty result array where we will store the substrings 
       sort the nums array 
       loop through the nums array with an index i which starts at -2 (This is so that we have 2 elements to the right of it to work with)
        we check if the index i > 0 and if the element in index i is equal to the element to the left of it:
            if it is, it's a duplicate, so we skip over it.
        create your two pointers with one starting at the second index of the array an the other at the last index 
        using a while loop to ensure the rest of our code block is executed only if the start index is still less than the end index 
        create a variable to store the sum of all three elements 
        check if the sum we did is equal 0:
            if it is, then we append the three elemensts that make that sum to the result array (Until the end)
            
            We create another loop that checks for duplicate values on the left of the array while our start is still less than our left:
                skip the duplicate by moving the pointer forward.
            We create another loop that checks for duplicate values on the right of the array while our start is still less than our left:
                skip the duplicate by moving the pointer backward.
                
            move the pointers accordingly 
            
            elif the sum is greater than 0:
                then we want to move the pointer backwards
            else: 
                move the pointer forward 
                
        jump out of the for loop to ensure a complete iteration and then return result. 
            
        
        
        time complexity = O(n log n) 
        space complexity = O(m) or O(n^3) in the worst case.
        """
        
        
        result = []
        nums.sort()
        
        for i in range(len(nums)- 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            start = i + 1 
            end = len(nums) - 1 
            
            while start < end:
                triplet_sum = nums[i] + nums[start] + nums[end]
                
                if triplet_sum == 0:
                    result.append([nums[i], nums[start], nums[end]])
                    while start < end and nums[start] == nums[start + 1]:
                        start += 1

                    while start < end and nums[end] == nums[end - 1]:
                        end -= 1
                    
                    start += 1
                    end -= 1
                elif triplet_sum > 0:
                    end -= 1
                else:
                    start += 1 
        return result