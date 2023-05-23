var TimeLimitedCache = function() {
    this.map = new Map(); //
    // NOPE XX: key > { value: int, function clearEntry(): setTimeout > map.delete()}
    // use function to add value, then call settimeout and remove the value after 
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const hasValue = this.map.get(key); //TRUE if exists and not expired

    //if exists && NOT expired => replace and return true
    if (hasValue) {
        clearTimeout(hasValue.timeoutId)
        const timeoutId = setTimeout(() => this.map.delete(key), duration);
        this.map.set(key, {value: value, timeoutId: timeoutId});
        return true;
    } else {
        //otherwise add and return false
        const timeoutId = setTimeout(() => this.map.delete(key), duration);
        this.map.set(key, {value: value, timeoutId: timeoutId});
        return false;
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const hasValue = this.map.get(key); //TRUE if exists and not expired
    if (hasValue) {
        return hasValue.value;
    } else return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.map.size;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
