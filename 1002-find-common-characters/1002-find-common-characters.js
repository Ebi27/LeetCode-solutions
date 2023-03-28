/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const result = [];
  const count = new Array(26).fill(Infinity);

  for (let i = 0; i < words.length; i++) {
    const wordCount = new Array(26).fill(0);
    const word = words[i];

    for (let j = 0; j < word.length; j++) {
      const index = word.charCodeAt(j) - 97;
      wordCount[index]++;
    }

    for (let j = 0; j < 26; j++) {
      count[j] = Math.min(count[j], wordCount[j]);
    }
  }

  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(i + 97);

    for (let j = 0; j < count[i]; j++) {
      result.push(char);
    }
  }

  return result;

};