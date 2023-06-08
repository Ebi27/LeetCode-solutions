/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let goodStr = 0

    for(let i = 0; i < s.length - 2; i++){
        const substring = [s[i], s[i + 1], s[i + 2]]
        const set = new Set(substring)

        set.size === 3 && goodStr++
    }
    return goodStr
};