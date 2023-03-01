//YouTube Video Solution: https://youtu.be/l6Q4rvRgtU4

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const minHeap = new MinPriorityQueue();
    for (let point of points) { // point is an array [x, y]
        let total = point[0] ** 2 + point[1] ** 2 // square both x and y and add them together (total distance to (0,0))
        minHeap.enqueue(point, total) // key, value: uses value to assign priority and key becomes element
    }
    const closestPoints = []
    while (k-- > 0) { //loop while k is greater than 0 and k = k-1 after each loop
        const {priority, element} = minHeap.dequeue(minHeap.front()) // priority = total, element = point [x, y]
        closestPoints.push(element)
    }
    return closestPoints
};
