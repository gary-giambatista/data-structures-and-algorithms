// Time complexity: O(1). Accessing an element at a specific index in an array is a constant time operation in JavaScript.

// Space complexity: O(1). No additional space is used.

Array.prototype.last = function() {
    if (this.length === 0) return -1
    return this[this.length - 1]
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
