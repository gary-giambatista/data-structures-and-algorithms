/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Solution 1 - using a Map, and optimizing last return to be n(n) instead of n(n2) by removing the use of Map.has()
var twoSum = function (nums, target) {
	const map = new Map();
	let hasSolution;
	for (let i = 0; i < nums.length; i++) {
		targetNumber = target - nums[i]; //n(1)
		hasSolution = map.get(targetNumber);
		if (hasSolution >= 0 && hasSolution !== i) return [hasSolution, i]; // n(n)
		map.set(nums[i], i); //n(1)
	}
	return [0, 0];
};


// Solution 2 - using an object, performs better with memory
 var twoSum = function(nums, target) {
     const hashMap = {}

     for (let i = 0; i < nums.length; i++) {
      let solutionNumber = target - nums[i]
      if (solutionNumber in hashMap) {
         return [i, hashMap[solutionNumber]]
      }
      hashMap[nums[i]] = i
     }
};

// Solution3 - using Map with has()
var twoSum = function (nums, target) {
	const map = new Map();

	for (const i in nums) {
		targetNumber = target - nums[i]; //n(1)
		if (map.has(targetNumber)) return [map.get(targetNumber), i]; // n(n) > return is n(n2)
		map.set(nums[i], i); //n(1)
	}
	return [0, 0];
};

//notes about JS for in and for of
// for in makes i the key part of the iterable, and thus works in this case as the key in an array is the index(0, 1, etc) which replicates a traditional for loop, 
// but, for of makes i the value of the index in order of the indices,
// thus it does not work in this problem
