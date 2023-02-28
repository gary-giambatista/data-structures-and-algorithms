/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    if (!root) return 0; //if the tree is 0, end and return 0 (edge case of empty tree)

    let max = 0; // establish a max diameter

    //helper function to do a depth-first-search and get to the leaf nodes
    const dfs = (node) => {
        if (!node) return 0; //basecase to end the recursion (are we past a leaf in the iteration) return 0 as to not pass up a number

        let left = dfs(node.left); // iterate to the left most node
        let right = dfs(node.right); // iterate to the right most node

        max = Math.max(left + right, max) //set the max, either to the total distance between left and right, or the current max
        return Math.max(left, right) + 1 //
    }

    dfs(root)
    return max
};
