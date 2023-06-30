/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams(s, p) {
  const result = [];
  
  // Create frequency maps for both strings
  const targetMap = new Map();
  const windowMap = new Map();
  
  // Initialize the target map
  for (let i = 0; i < p.length; i++) {
    const char = p[i];
    targetMap.set(char, (targetMap.get(char) || 0) + 1);
  }
  
  let left = 0;
  let right = 0;
  let matchCount = 0;
  
  while (right < s.length) {
    const charRight = s[right];
    
    // Update the window map
    windowMap.set(charRight, (windowMap.get(charRight) || 0) + 1);
    
    // Increment the match count if the frequency matches in both maps
    if (targetMap.has(charRight) && windowMap.get(charRight) <= targetMap.get(charRight)) {
      matchCount++;
    }
    
    // Shrink the window if it exceeds the length of p
    if (right - left + 1 > p.length) {
      const charLeft = s[left];
      
      // Decrease the frequency in the window map
      windowMap.set(charLeft, windowMap.get(charLeft) - 1);
      
      // Decrement the match count if the frequency is less in the window map
      if (targetMap.has(charLeft) && windowMap.get(charLeft) < targetMap.get(charLeft)) {
        matchCount--;
      }
      
      // Remove the character from the window map if its frequency becomes zero
      if (windowMap.get(charLeft) === 0) {
        windowMap.delete(charLeft);
      }
      
      // Move the left pointer
      left++;
    }
    
    // Check if an anagram is found
    if (matchCount === p.length) {
      result.push(left);
    }
    
    // Move the right pointer
    right++;
  }
  
  return result;
}
