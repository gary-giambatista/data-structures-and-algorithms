// Let N be the depth of the prototype chain for the given object.
//Time Complexity: O(N). The algorithm iterates through the prototype chain, which takes time proportional to its depth.
//Space Complexity: O(1). The algorithm uses a constant amount of extra space to store the currentPrototype variable.

/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== "function") { // maybe not needed, but short circuit if...
        return false;
    }
    // use getPrototype of and not instanceof(type casted values don't return true)
    currentPrototype = Object.getPrototypeOf(obj); //get the prototype object reference for the object
    while (currentPrototype !== null) { //iterate through the prototype chain
        if (currentPrototype === classFunction.prototype) { //if the prototype object of both references the same data return true
            return true;
        } else currentPrototype = Object.getPrototypeOf(currentPrototype) // move up the prototype chain
    }
    return false; // no matches, return false
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
