//Time Complexity: O(N)
//Space Complexity: O(1)

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let currentIndex = 0;
    const answer = [];

    while (currentIndex < arr.length) { //+ (size - 1)
        const segment = arr.slice(currentIndex, currentIndex + size)
        answer.push(segment);
        currentIndex += size;
    }
    return answer;
};
