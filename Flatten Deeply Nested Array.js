//Time Complexity: O(k*n) where k represents the average number of nested arrays at each level, and n is the maximum depth level
//Space Complexity: O(n)

/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    const answer = [];

    function recursion(arr, depth) { //use input arrays, and a depth of 0 to start
        for (const val of arr) { // iterate through every index's value
            if (typeof val === "object" && depth < n) { // execute recursion on other arrays, up UNTIL the limit of n
                recursion(val, depth + 1)
            } else {
                answer.push(val);// pushes integers or arrays if depth > n into answer[]
            }
        }
        return answer; // return answer
    }
    return recursion(arr, 0); // call recursive helper function with initial depth of 0 and input arrays
};
