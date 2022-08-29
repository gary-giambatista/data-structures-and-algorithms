/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let array = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[array.length - 1 - i]) return false
    }
    return true
};
