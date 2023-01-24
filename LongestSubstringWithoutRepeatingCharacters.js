/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(string) {
	const set = new Set();
	let start = 0;
	let end = 0;
	let max = 0;
	while (end < string.length) {
		if (!set.has(string[end])) {
			//set doesn't have value
			set.add(string[end]);
			end++;
			max = Math.max(set.size, max);
		} else {
			//set has value *end of substring without repeating chars
			set.delete(string[start]);
			start++;
		}
	}
	return max;
};
