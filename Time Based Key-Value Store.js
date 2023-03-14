//Object style
var TimeMap = function() {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (this.map[key]) {
        this.map[key].push([value, timestamp]);
    } else this.map[key] = [[value, timestamp]]
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let answer = "";
    if (!this.map[key]) return answer;
    left = 0;
    right = this.map[key].length - 1;

    while (left <= right) { // binary search to find the closest [value, timestamp] for the key in the map
        const middleIndex = Math.floor((left + right) / 2)
        const [middleValue, middleTimestamp] = this.map[key][middleIndex]; //gets middle array, destructure it's [value, timestamp]
        if (middleTimestamp === timestamp) {
            return middleValue
        } else if (middleTimestamp <= timestamp) {
            answer = middleValue; // set current value as answer, as it's the known closest to answer
            left = middleIndex + 1; // look for a smaller value
        } else right = middleIndex - 1; // look for a smaller value, answer cannot be larger than timestamp
    }
    return answer;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
