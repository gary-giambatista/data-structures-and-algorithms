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
    // iterate the entries map, get all the keys sorted by the highest to lowest of the values 
    let sortArr = [...map.keys()].sort((a, b) => map.get(b) - map.get(a)).slice(0, k)
    
    return sortArr;

};
