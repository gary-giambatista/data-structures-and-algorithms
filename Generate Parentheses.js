/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let answers = []
    function backTrack(forwardN, backN, stack) {
      if(forwardN === backN && backN === n){
        answers.push(stack.join(""));
      }
      if(forwardN<n){
        backTrack(forwardN + 1, backN, [...stack, '('] );
      }
      if(backN<forwardN){
        backTrack(forwardN, backN +1, [...stack, ')']);
      }
    };
  backTrack(0,0,[]);
  return answers;
};


//OR
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const stack = [];
    const answer = [];

    function backTrack(forwardN, backN) {
        if (backN === forwardN && backN === n) {
            answer.push(stack.join(''));
            return;
        }

        if (forwardN < n) {
            stack.push("(");
            backTrack(forwardN + 1, backN);
            stack.pop();
        }
        if (backN < forwardN) {
            stack.push(")");
            backTrack(forwardN, backN + 1);
            stack.pop();
        }
    }
    backTrack(0, 0);
    return answer;
};
