class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1] * (len(nums)) #fill res with 1 for length of input array nums
        
        prefix = 1
        for i in range(len(nums)): # in >> get the indexs of input array nums
            print("before", res[i], prefix)
            res[i] = prefix # set res[i] = prefix 
            print("after", res[i], prefix)
            prefix *= nums[i] # multiply prefix by input index
        postfix = 1 
        for i in range(len(nums) - 1, - 1, -1): # iterate from the back forwards
            res[i] *= postfix # calculate existing value res(prefix forward values) * values from back forward (starting from 1)
            postfix *= nums[i] # get back value (current value * next forward input array value)
        return res
