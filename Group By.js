//Time Complexity: O(N). The algorithm iterates over each element once.
//Space Complexity: O(N). The algorithm creates new array(s) whose lengths add up to the length of the original array.

/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const answer = {}; // declar object to fill with key's > arrays of objects/arrays

    for (let obj of this) { // iterate through the objs of this (array of objects/arrays)
        const key = fn(obj); //get the key using the provided function arguement
        if (!answer.hasOwnProperty(key)) { //check if the key exists in answer, if it doesn't set it to empty array
            answer[key] = [];
        }
        answer[key].push(obj) // push onto this key the new obj/array
    }
    return answer; //return the answer
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */


//Short hand
/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const answer = {};

    for (let obj of this) {
        const key = fn(obj);
        answer[key] = answer[key] || []; //check if the key exists in answer, if it doesn't set it to empty array
        answer[key].push(obj)
    }
    return answer;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
