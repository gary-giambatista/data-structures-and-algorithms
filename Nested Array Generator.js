//Time complexity: O(N), where N is the total number of elements in the array.
//Space complexity: O(D), where D is the depth of the recursion call. Stores max of 1 value per nested level of arrays

/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    
    for (const int of arr) {
        if (typeof int === "number") {
            yield int;
        } else yield* inorderTraversal(int) //special yield to call on on indexes of sub arrays
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
