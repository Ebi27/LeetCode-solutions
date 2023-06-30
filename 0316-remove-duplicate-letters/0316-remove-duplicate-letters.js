/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const charCount = new Array(26).fill(0);
  const visited = new Array(26).fill(false);
  const stack = [];

  // Count the frequency of each character
  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - 97;
    charCount[index]++;
  }

  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - 97;

    // Decrement the count for the current character
    charCount[index]--;

    if (visited[index]) {
      // Skip the current character if it's already visited
      continue;
    }

    // Remove characters from the stack that are greater than the current character
    while (stack.length > 0 && stack[stack.length - 1] > s[i] && charCount[stack[stack.length - 1].charCodeAt(0) - 97] > 0) {
      const poppedChar = stack.pop();
      visited[poppedChar.charCodeAt(0) - 97] = false;
    }

    // Add the current character to the stack and mark it as visited
    stack.push(s[i]);
    visited[index] = true;
  }

  // Construct the final result from the stack
  return stack.join('');
}

