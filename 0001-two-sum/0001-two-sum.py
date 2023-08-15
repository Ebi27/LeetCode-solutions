class Solution(object):
    def twoSum(self, nums, target):
        """
        input:type nums: List[int]
        :type target: int
        output:rtype: List[int]

        How do we prove correctness ?
        The problem requires finding any two distinct indices i and j such that nums[i] + nums[j] equals the target.
        If we find these two dictinct indices, 
        Then we know that our algo is correct. 

        E.g nums = [2,7,11,15], target = 9
        Output: [0,1]


        Initialize an empty dictionary to store the mapping of values to their indices
        loop through nums:
            calculate the difference between the target and the current number 
            If the complecent is already in the dictionary
            return the indices of the two elements that add up to the target
            Add the current number and it's index to the dictionary 

        If no solution is found, return an empty list or raise an exception 
        """
        dict = {}

        for i, num in enumerate(nums):
            getNum = target - num 
            if getNum in dict:
                return [dict[getNum], i]
            dict[num] = i

    