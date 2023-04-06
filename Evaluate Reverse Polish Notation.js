// Time Complexity: O(n) - iterate entirely through the tokens array
// Space Complexity: O(n) - create an array for at worst size of tokens array
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []; // initialize a stack
    for (let token of tokens) { // check each item in the tokens array
        if (token === "+") { // if + operator
            stack.push(stack.pop() + stack.pop()); //pop off last 2 items, add and push back
        } else if (token === "-") { // if - operator
            let a = stack.pop(); //2nd element (in order)
            let b = stack.pop(); // 1st element (in order)
            stack.push(b - a) // push the difference between 1st - 2nd
        } else if (token === "*") { // if * operator
            stack.push(stack.pop() * stack.pop()); // //pop off last 2 items, multiply and push back
        } else if (token === "/") { // if / operator
            let a = stack.pop(); //2nd element (in order)
            let b = stack.pop(); // 1st element (in order)
            stack.push(Math.floor(b / a)) // X need to use parseInt() instead
        } else stack.push(parseInt(token)) //creating stack here as integers
    }
    return stack[0] //return what is left in the stack [0]
};
