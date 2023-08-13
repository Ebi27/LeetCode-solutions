class Solution(object):
    def isAnagram(self, s, t):
        """
        How do we prove correctness ? If we find all the letters of s in t 
        :type s: str
        :type t: str
        :rtype: bool

        if the length of letters in 's' is not the same as in 't':
            Return False because It is not an anagram 
        Initialize an empty dictionary to keep track of frequencies of items in a key value pair 
        Loop through the s 
            is val already in the dict ? 
                increament the count 
                
            is val not in the dict ?
                add it and intialize a count of 1 
                
        loop throught the t 
            is val present in dict ? 
                decrease count 
                
        loop through the keys in the dictionary 
            if any key in the dict is not equal 0, that means they dont contain the same the same letters 
                 return false 
                 
        else:
            return true. 
        """
        if len(s) != len(t):
             return False 

        dict = {}
        
        for char in s:
            if char in dict:
                dict[char] += 1
            else: 
                dict[char] = 1 
                
        for char in t:
            if char in dict:
                dict[char] -= 1
                

        for key in dict:
            if dict[key] != 0:
                return False  
            
        return True
                
                