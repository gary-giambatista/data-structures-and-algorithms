/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	//all pointers need to be updated, every iteration, there will be 2 updates
	// i.e. left OR right AND middle will be updated
	//ALL values represent indexes
	let left = 0;
	let right = nums.length - 1;
	let middle; // middle is what we are checking against target

	while (left <= right) {
		// first thing get the middle to check againist the target
		// take the left index pointer of the array and add it to the half point of the distance between left and right
		//right and left are measured in index
		//right - left = distance between the two, / 2 = the halfway point]
		// left and right indexes are used to get the middle index
		middle = left + Math.floor((right - left) / 2);
		console.log(middle);
		if (nums[middle] === target) return middle;

		// if not, we need to adjust either left or right so that middle can be recalculated correctly above in the next loop
		if (target > nums[middle]) left = middle + 1; // go right
		if (target < nums[middle]) right = middle - 1; // go left
	}
	return -1;
};
