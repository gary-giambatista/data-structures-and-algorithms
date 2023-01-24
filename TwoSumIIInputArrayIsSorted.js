/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
	// use  2 pointer method and check target vs. sum of 2 pointers ** possible bc the numbers array is sorted>> if checks on sum vs. target
	let start = 0;
	let end = numbers.length - 1;
	let sum;
	while (start <= end) {
		sum = numbers[start] + numbers[end];

		if (sum === target) {
			return [start + 1, end + 1];
		} else if (sum > target) {
			//since numbers is sorted, we can logically say, sum > target, so we need to DECREASE sum, therefore, we move the end(larger numbers) closer to the start(smaller numbers)
			end -= 1;
		} else if (sum < target) {
			// increase sum size by making start larger
			start += 1;
		}
	}
	return [0, 0];
};
