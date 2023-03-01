// YouTube video solution: https://youtu.be/ppbp4p-idXI

class KthLargest {
	constructor(k, nums) {
		this.k = k;
		this.minHeap = new MinPriorityQueue();
		nums.forEach((num) => this.add(num));
	}

	add(val) {
		this.minHeap.enqueue(val);
		if (this.minHeap.size() > this.k) {
			this.minHeap.dequeue(this.minHeap.front());
		}
		return this.minHeap.front().element;
	}
}

//1. var obj = new KthLargest(k, nums)
var obj = new KthLargest(3, [4, 5, 8, 2]);
obj.minHeap = [2, 4, 5, 8];
k = 3;

//2. adding 3
obj.minHeap = [4, 5, 8]
// kthLargest.add(3); k = 3
//   this.minHeap.enqueue(3);
obj.minheap = [3, 4, 5, 8];

// minHeap.size() > k   (4 > 3)
// shift off 3
obj.minHeap = [4, 5, 8];

//return minHeap[0] (aka. minHeap.front().element)
return 4;

//3. kthLargest.add(5); k = 3
//   this.minHeap.enqueue(5); (val = 5)
obj.minHeap = [4, 5, 5, 8];

// minHeap.size() > k  - (4 > 3)
obj.minHeap = [4, 5, 5, 8];
//shift off the 4
obj.minHeap = [5, 5, 8];

//return minHeap[0] (aka. minHeap.front().element)
return 5;
