/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	const set = new Set();

	for (const num of nums) {
		// if (set.has(num)) return false //n(n) *quick escape, but inefficient

		const prevSetSize = set.size ? set.size + 1 : 1; //n(1)
		set.add(num); // n(n)
		if (prevSetSize !== set.size) return false; //N(1)
	}
	// if (set.size !== nums.length) return false
	return true;
};
