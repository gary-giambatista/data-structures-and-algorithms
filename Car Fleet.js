/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const arrayPair = [];

    for (let i=position.length - 1; i >= 0; i--) {
        arrayPair.push([position[i], speed[i]])
    }
    arrayPair.sort((a, b) => b[0] - a[0]) //Reverse sort
    const stack = [];

    for (let i = 0; i < arrayPair.length; i++) {
        stack.push((target - arrayPair[i][0]) / arrayPair[i][1]) // calculate arrival time
            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) { //if stack has 2 or more arrival times and the arrival time right before the last is larger, pop off that time, as the newly added time will have to arrive at that 2nd time bc it can't pass
                stack.pop()
            }
    }
    return stack.length
};
