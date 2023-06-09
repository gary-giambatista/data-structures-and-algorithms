//Time complexity: O(1). The time complexity of the fibGenerator function is O(1) for each next() call. This is because in each call to next(), we only perform a fixed number of operations: adding two numbers and swapping two variables. Hence, the time complexity does not grow with the number of calls to next(). 
//However, if you were to consider the time complexity of generating N Fibonacci numbers (i.e., making N calls to next()), the overall time complexity would be O(N, since you'd be making N constant-time operations.

//Space complexity: O(1). The space complexity of the fibGenerator function is also O(1). This is because we only use a fixed amount of space to store the two most recent numbers in the Fibonacci sequence and one additional variable for the calculation, regardless of how many times we call next()

/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let n1 = 0;
    let n2 = 1;
    while (true) {
        yield n1;
        let temp = n2;
        n2 = n2 + n1;
        n1 = temp;
        // [n1, n2] = [temp, n2 + n1] update simultaneously first evaluates right side creating temp array, then deconstructs left and updates right simultaneously >> no need for temp variable
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
