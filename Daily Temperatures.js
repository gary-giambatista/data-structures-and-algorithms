// Time Complexity: O(N) linear
// Space Complexity: O(1) constant

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const answer = new Array(temperatures.length).fill(0) // initialize answer array with 0's filled to input's length
    const stack = [] // [temp, index] stack to hold temps/indexes until greater temp is found at later index

    temperatures.forEach((temperature, index) => { // use forEach to get [temp, index] pair
        while (stack.length >= 1 && temperature > stack[stack.length - 1][0]) { // if stack has something and it's last value temp is higher than the current temp -> need to calculate distance between indexes
            let stackIndex = stack.pop()[1]; //pop off last entry from stack, and get the index value
            answer[stackIndex] = (index - stackIndex) // at the index of the stack item, add the difference to the answer
        }
        stack.push([temperature, index]) // populate the stack with [temp, index] pair
    })
    return answer; //return answer, no 0's need to be added bc, already pre-populated while answer was instantiated
};
