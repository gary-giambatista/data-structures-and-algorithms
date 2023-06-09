//Time complexity: O(N) This approach involves precomputing the Fibonacci sequence, where N is the length of the array (the number of Fibonacci numbers we want to generate). After this precomputation, each call to next() is O(1)O(1)O(1).

//Space complexity: O(N) This approach requires storing N numbers in the array, resulting in a space complexity of O(N). However, unlike the recursive approach, this space is not used for call stack frames but for storing the sequence numbers.

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
