/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
    async function evaluateNext() {
        if (functions.length === 0) { //basecase - after all functions are removed, stop
            return;
        } else {
            const fn = functions.shift(); // removes first function from functions and stores in a variable
            await fn(); // call and await the function
            await evaluateNext(); // begin recursion
        }
    }
    const nPromises = Array(n).fill().map(evaluateNext); // call evaluateNext for the size of n
    await Promise.all(nPromises); // wait until all evaluateNext functions have finished, then resolve
};
