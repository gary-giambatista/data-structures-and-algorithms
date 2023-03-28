//Time Complexity O(N*N) worst case > O(N) linear
//Space Complexity O(1) constant

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = 0; // slow pointer
    let fast = 0; // fast pointer

    while (true) {
        slow = nums[slow] // value becomes index (increment by 1)
        fast = nums[nums[fast]] // double index, moves index by 2
        if (slow === fast) break // when values are the same, STOP
    }
    console.log(slow) // returns 4 for nums=[1,3,4,2,2]
    let slow2 = 0; // the 2nd slow pointer (increment by 1 as well)
    while (true) {
        slow = nums[slow] // value becomes index (increment by slow) bounces back between the start/end of node cycle
        slow2 = nums[slow2] // value becomes index (increment by 1)
        if (slow === slow2) return slow
    }
};
