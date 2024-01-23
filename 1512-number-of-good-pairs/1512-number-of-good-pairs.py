class Solution(object):
    def numIdenticalPairs(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        
        create an empty dict which holds a key-value pair 
        key is the frequency of occurence of that number 
        value is the number itself 
            loop through nums:
                check if the value is present in the dictionary
                    if it is, 
                        increment the count
                    else:
                        initialize a count 
                        
            loop through th keys in the dict:
                create a sum variable that holds the total of good pairs 
                check if a key is greater than one, 
                    if it is, 
                        then n * (n - 1) // 2
                        add the result to the sum variable 
                        loop until the end and return the sum variable.
                        
    
    Trade- offs:
    - We end up with an extra space 
        """
        
        hashmap = dict()
        sum = 0
        
        for num in nums:
            if num in hashmap:
                hashmap[num] += 1 
            else:
                hashmap[num] = 1
                
                
        for val in hashmap:
            if hashmap[val] >= 2:
                sum += (hashmap[val] * (hashmap[val] - 1)) //2
                print(sum)             
        
        return sum 