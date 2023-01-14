/**
 * @param {string} s
 * @return {boolean}
 */
// Solution 1 - match() is a faster regex search, but it returns an array instead of a string. To fix it, just use toLowerCase() before match().
var isPalindrome = function(s) {
    const chars = s.toLowerCase().match(/[a-z0-9]/g); // alphanumeric characters include numbers
    if (chars === null) return true; // if chars is empty(match() returns null when empty), return
    for (let i = 0; i < chars.length; i++) {
	    if (chars[i] !== chars[chars.length - i - 1]) return false;
	}
	return true;
};



// Solution 2 - using replace - slightly inefficient bc needs to replace matched string with new substring
var isPalindrome = function(s) {
    let array = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[array.length - 1 - i]) return false
    }
    return true
};
