class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        minHeap = []
        for x, y in points:
            distance = x ** 2 + y ** 2
            minHeap.append([distance, x, y])

        heapq.heapify(minHeap)
        answer = []
        while k > 0:
            distance, x, y = heapq.heappop(minHeap)
            answer.append([x, y])
            k -= 1
        return answer
