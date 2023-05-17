/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const answerArray = [];

    for (let i = 0; i < arr.length; i++) {
        let truthy = fn(arr[i], i)
        if (truthy) {
            answerArray.push(arr[i])
        }
    }
    return answerArray;
};
