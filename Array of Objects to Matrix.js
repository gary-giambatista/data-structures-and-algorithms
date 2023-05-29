/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function(arr) {
    const keySet = new Set();

    //Get key combos
    for (const obj of arr) {
        getKeys(obj, "");
    }
    const keys = Array.from(keySet).sort();
    const res = [keys]; //key combos - paths of the keys in the top array

    for (const obj of arr) {
        const keyToValue = {};
        getValues(obj, "", keyToValue)
        let row = []; //build the current row using keys
        for (const key of keys) {
            if (key in keyToValue) {
                row.push(keyToValue[key]);
            } else {
                row.push("");
            }
        }
        res.push(row);
    }
    return res;

    function getKeys(obj, path) {
        for (const key in obj) {
            const newPath = path ? `${path}.${key}` : key;
            if (obj[key] !== null && typeof obj[key] === "object") {
                getKeys(obj[key], newPath)
            } else {
                keySet.add(newPath);
            }
        }
    }

    function getValues(obj, path, keyToValue) {
        for (const key in obj) {
            const newPath = path ? `${path}.${key}`: key;
            if (obj[key] !== null && typeof obj[key] === "object") {
                getValues(obj[key], newPath, keyToValue);
            } else {
                keyToValue[newPath] = obj[key];
            }
        }
    }

};
