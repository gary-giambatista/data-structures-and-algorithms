// Time complexity: O(n), where n is the number of arguments passed to the function
// Space complexity: O(1)

/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    return this.apply(context, args)
    //OR return this.bind(context)(...args)
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
