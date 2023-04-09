class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
            answer = [0] * len(temperatures)
            stack = [] #[temp, index]

            for index, temp in enumerate(temperatures):
                while stack and temp > stack[-1][0]: #check temp aganist last element in stack's temp
                    stackTemp, stackIndex = stack.pop() # if temp is greater than stack's temp, pop stack
                    answer[stackIndex] = (index - stackIndex) #add index - stack's index to answer at stacks index
                stack.append([temp, index]) #if stack is empty, or temp is less than stack's temp
            return answer # already filled answer with 0's incase of no larger temp existing 
