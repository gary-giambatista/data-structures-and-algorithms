/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    this.intArray = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    let total = 0;
    this.intArray.forEach((num) => total += num)
    return total;
}

ArrayWrapper.prototype.toString = function() {
    console.log(this.intArray, `${this.intArray}`) //string interpolation on an array, will transform the array into a string, as if you called the String(array) method on it
    return `[${this.intArray}]`
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
