/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const charToCountMap = {}
    for (let i = 0; i < s.length; i++) {
        if (!charToCountMap[s[i]]) charToCountMap[s[i]] = 0
        if (!charToCountMap[t[i]]) charToCountMap[t[i]] = 0
        charToCountMap[s[i]]++
        charToCountMap[t[i]]--
    }
    for (let individualChars in charToCountMap) {
        if (charToCountMap[individualChars] !== 0) return false
    }
    return true
};
