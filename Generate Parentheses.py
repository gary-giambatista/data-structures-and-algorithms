class Solution:
    def generateParenthesis(self, n: int) -> List[str]:

        stack = []
        answer = []

        def backTrack(openN, closeN):
            if openN == closeN == n:
                answer.append("".join(stack))
                return

            if openN < n:
                stack.append("(")
                backTrack(openN + 1, closeN)
                stack.pop()

            if closeN < openN:
                stack.append(")")
                backTrack(openN, closeN + 1)
                stack.pop()
        backTrack(0, 0)
        return answer
