YouTube Video Solution: https://youtu.be/1S774k0DojU

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let smallestNum = nums[0]; //initial guess for smallest number
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (nums[left] < nums[right]) { //nums is already sorted OR new range is sorted
            smallestNum = Math.min(smallestNum, nums[left]) // set smallest number
            break // exit while loop
        }
        const middle = Math.floor((left + right) / 2) // calculate middle
        smallestNum = Math.min(smallestNum, nums[middle]) // check if middle is the new smallest number
        if (nums[middle] >= nums[left]) { //[2, 3, 4, 0, 1] left to middle is sorted properly, but...
            left = middle + 1 // are we missing any smaller numbers on the end? Check right side!
        } else right = middle - 1 //[2, 0, 1, 1, 1] middle is smaller than left, check for start point 
    }
    return smallestNum
};

//STEPS
//nums = [3,4,5,1,2]

// //1.
// smallestNum = 3
// left = 0
// right = 4

// while (0 <= 4)
// middle = 0+4 / 2 = 2
// smallestNum = Math.min(3, 5) = 3
// nums[middle] >= nums[left] 5 >= 3
// left = 2 + 1

// //2.
// smallestNum = 3
// left = 3
// right = 4

// while (3 <= 4)
// middle = 3+4 / 2 = 3
// smallestNum = Math.min(3, 1) = 1
// nums[middle] >= nums[left] 1 >= 1
// left = 3 + 1

// //3.
// smallestNum = 1
// left = 4
// right = 4

// while (4 <= 4)
// middle = 4+4 / 2 = 4
// smallestNum = Math.min(1, 2) = 1
// nums[middle] >= nums[left] 2 >= 2
// left = 4 + 1

// //4.
// smallestNum = 1
// left = 5
// right = 4

// !while (5 <= 4)
// return smallestNum = 1
