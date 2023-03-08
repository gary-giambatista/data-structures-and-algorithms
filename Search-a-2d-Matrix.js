//YouTube Video Solution: https://youtu.be/1PT_FQMnxOI

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
	let rows = matrix.length //height
	let columns = matrix[0].length //width
    let left = 0 //starting index of the matrix as if it were 1 array
    let right = rows * columns - 1 //height * width  - 1 (array offset -1)
    let middle;

    while (left <= right) {
        middle = Math.floor((left + right) / 2) //get the middle index number of the combined arrays (as if it was 1 array)
		const middleVal = matrix[Math.floor(middle/columns)][middle%columns] //calculate the middle coordinates in the matrix
        if (middleVal === target) return true // check if the middle coordinate's value is target
		if (middleVal > target) right = middle - 1 // middle coordinate's value > target move right down
		if (middleVal < target) left = middle + 1 // middle coordinate's value < target move left up
    }
	return false; // target is not in the matrix

};

//1.
rows = 3
columns = 4
left = 0
right = 3 * 4 - 1 // 11

middle = (0 + 11) / 2 // round down to 5
middleVal = matrix[5/4, 5%4] // matrix[1, 1] = 11

11 > 3 right = 5 - 1 // right = 4

//2.
rows = 3
columns = 4
left = 0
right = 4

middle = (0 + 4) / 2 // 2
middleVal = matrix[2/4, 2%4] // matrix[0, 2] = 5

5 > 3 right = 2 - 1 // right = 1

//3.
rows = 3
columns = 4
left = 0
right = 1

middle = (0 + 1) / 2 // 0
middleVal = matrix[0/4, 0%4] // matrix[0, 0] = 1
1 < 3 left = 0 + 1 // left = 1

//4.
rows = 3
columns = 4
left = 1
right = 1

middle = (1 + 1) / 2 // 1
middleVal = matrix[1/4, 1%4] // matrix[0, 1] = 3
3 === 3 return true
