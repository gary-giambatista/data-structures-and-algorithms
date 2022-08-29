/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
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
