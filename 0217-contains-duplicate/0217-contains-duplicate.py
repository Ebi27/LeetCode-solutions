class Solution(object):
    def containsDuplicate(self, nums):
        """
        Input:type nums: List[int]
       Output:rtype: bool
        
        We need to determine if there are any duplicates in our input. 
        
        create a dictionary to keep track of the frequency of numbers 
            loop through the nums list 
                if the curr num is present in the diction 
                     it is? then, we have a duplicate. Return true. 
                else if it isn't, then we add it and assign a freq of 1.      
            If none meet the duplicate check condition, then we have no duplicate. We return true. 
        """
        
        hashmap = {}
        for num in nums:
            if num in hashmap:
               return True
        
            else:
                hashmap[num] = 1 
                
        return False 
            