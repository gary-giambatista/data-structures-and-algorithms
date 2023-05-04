//Time Complexity: O(N)
//Space Complexity: O(N)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

    // Create a map, set the elements to be the keys and the freq to be the values
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    //spread the keys into an array, then sort the keys in descending order by getting their count and comparing, slice of 2 largest
    let sortArr = [...map.keys()].sort((a, b) => map.get(b) - map.get(a)).slice(0, k)
    
    return sortArr;

};
