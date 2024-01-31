class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        
        
        Using Hashmap to map key value pairs. To cover thr edge case of missing values, we use the default dict. 
        loop through each string:
            create a count variable i.e a list for 26 chars, initializing all to zero. [a: 0, b:0, c:0, d:0.....z:0]
            loop through each char of the string we previously looped through 
                using the python ord function, we return a unicode for each character and assign to the count variable [ord(122) - ord(97) + 1 will be 26 which is then z]
            append the string to the dict as a tuple since a list can be a key in python 
        return the result dictionary. 
        
        Tc - O(m * n) where m is the length of the entire str arr and n is the length of each individual string with their chars being iterated over. 
        SC - o(n) with the extra storage required by the dict. 
        """
        
        result = defaultdict(list)
        
        for str in strs:
            count = [0] * 26 
            
            for char in str:
                #print(char)
                count[ord(char) - ord("a")] += 1
                print(count)
            result[tuple(count)].append(str)
        return result.values()
        