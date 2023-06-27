/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
  let stack = [];
  let lastOccurrence = {};

  // Store the last occurrence of each character in the input string
  for (let i = 0; i < s.length; i++) {
    lastOccurrence[s[i]] = i;
  }
  console.log('lastOccurrence: ', lastOccurrence)

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    // Skip if the character is already in the stack
    if (stack.includes(char)) {
      continue;
    }

    // Remove characters from the stack if they are greater than the current character
    while (stack.length > 0 && stack[stack.length - 1] > char &&
            i < lastOccurrence[stack[stack.length - 1]] ) {
      stack.pop();
    }

    stack.push(char);
  }

  return stack.join("");
};
