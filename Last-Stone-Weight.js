//YouTube video solution: https://youtu.be/VyTn9-B1m44

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const maxHeap = new MaxPriorityQueue(); // create new Max Heap
    for (let stone of stones) { // add each number from the stones array to the heap
        maxHeap.enqueue(stone)
    }
    
    while (maxHeap.size() > 1) { // continue as long as heap size is bigger than 1
        console.log(maxHeap.dequeue()) // { priority: 8, element: 8 }
        let first = maxHeap.dequeue().element // shift() off top (largest) number
        let second = maxHeap.dequeue().element // shift() off top (largest) number
        if (first > second) { // if first is bigger, there will be a remainder
            maxHeap.enqueue(first - second) // add the remainder back to the heap
        }
    }
    if (maxHeap.size() === 0) return 0 // if the heap is empty, return 0
    return maxHeap.front().element // return the only remaining number 
}

//1.
maxHeap = [8, 7, 4, 2, 1, 1]
//shift off 8 and 7
first = 8
second = 7
maxHeap = [4, 2, 1, 1]

// 8 > 7 so add 8-7 to [4, 2, 1, 1]
maxHeap = [4, 2, 1, 1, 1]

//2.
maxHeap = [4, 2, 1, 1, 1]
//shift off 4 and 2
first = 4
second = 2
maxHeap = [1, 1, 1]

4 > 2 so add 4-2 to [2, 1, 1, 1]
maxHeap = [2, 1, 1, 1]

//3.
maxHeap = [2, 1, 1, 1]
//shift off 4 and 2
first = 2
second = 1
maxHeap = [1, 1]

2 > 1 so add 2-1 to [1, 1]
maxHeap = [1, 1, 1]

//4. 
maxHeap = [1, 1, 1]
//shift off 1 and 1
first = 1
second = 1
maxHeap = [1]

//5. 
return 1
