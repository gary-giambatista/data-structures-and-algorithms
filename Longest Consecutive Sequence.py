#Time Complexity: O(N)
#Space Complexity: O(N)

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums)
        maxSequence = 0

        for num in nums:
            if (num - 1) not in numSet:
                numberSequence = 0
                while (num + numberSequence) in numSet:
                    numberSequence += 1
                maxSequence = max(maxSequence, numberSequence)
        return maxSequence
