//Time complexity = O(N)
//Space Complexity = O(N)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer = [];

    let prefix = 1; // prefix = 1 offsets first iteration of multiplication calculation to itself
    //calculate total of i * i+1 forwards
    for (let i = 0; i < nums.length; i++) {
        answer[i] = prefix; // update answer to current multiplication calculation going forwards
        prefix *= nums[i] // update prefix = prefix * input[index]
    }
    console.log(answer)
    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= postfix //calculate total of prefix * nums.length - 1 - 1 (backwards)
        postfix *= nums[i] // update postfix = postfix * input[backwards index]
    }
    return answer
};
