//Time O(n)
//Space O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let maxSequence = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let numberSequence = 0;
            while (set.has(num + numberSequence)) {
                numberSequence += 1;
            }
            maxSequence = Math.max(maxSequence, numberSequence);
        }
    }
    return maxSequence;
};
