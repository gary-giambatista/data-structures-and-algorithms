/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
    
    if (!isObject(obj1) && !isObject(obj2)) { //both primitives
        return obj1 === obj2 ? {} : [obj1, obj2]
    }
    if (!isObject(obj1) || !isObject(obj2)) { //only 1 primitive
        return [obj1, obj2]
    }
    if (Array.isArray(obj1) !== Array.isArray(obj2)) { // 1 array, 1 object
        return [obj1, obj2]
    }
    const answer = {};

    for (const key in obj1) {
        if (obj2.hasOwnProperty(key)) {
            const result = objDiff(obj1[key], obj2[key])
            if (Object.keys(result).length > 0) {
                answer[key] = result;
            }
        }
    }
    return answer;

    function isObject(obj) {
        return typeof obj === "object" && obj !== null;
    }
};
