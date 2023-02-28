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

//1. dfs(root) = dfs(1) =
(left = dfs(2)), //root.left
	(right = dfs(3)), //root.right
	(max = Math.max(left + right, max));
return Math.max(left, right) + 1;

//3. L dfs(4)
(left = dfs(null)), //root.left
	(right = dfs(null)), //root.right
	(max = Math.max(left + right, max));
return Math.max(left, right) + 1;

//4. L dfs(null)
return 0;

//5. R dfs(null)
return 0;

//3. L dfs(4)
(left = 0), //root.left
	(right = 0), //root.right
	(max = Math.max(0 + 0, max));
return Math.max(0, 0) + 1;

//2. L dfs(2)
(left = 1), //root.left
	(right = dfs(5)), //root.right
	(max = Math.max(1 + right, max));
return Math.max(1, right) + 1;

//6. R dfs(5)
(left = dfs(null)), //root.left
	(right = dfs(null)), //root.right
	(max = Math.max(left + right, max));
return Math.max(left, right) + 1;

//7. L dfs(null)
return 0;

//8. R dfs(null)
return 0;

//6. R dfs(5)
(left = 0), //root.left
	(right = 0), //root.right
	(max = Math.max(0 + 0, max));
return Math.max(0, 0) + 1;

//2. L dfs(2)
(left = 1), //root.left
	(right = 1), //root.right
	(max = Math.max(1 + 1, 0));
return Math.max(1, 1) + 1;

//1. dfs(root) = dfs(1) =
(left = 2), //root.left
	(right = dfs(3)), //root.right
	(max = Math.max(2 + right, 2));
return Math.max(2, right) + 1;

//9. R dfs(2)
(left = dfs(null)), //root.left
	(right = dfs(null)), //root.right
	(max = Math.max(left + right, 2));
return Math.max(left, right) + 1;

//10. L dfs(null)
return 0;

//11. R dfs(null)
return 0;

//9. R dfs(2)
(left = 0), //root.left
	(right = 0), //root.right
	(max = Math.max(0 + 0, 2));
return Math.max(0, 0) + 1;

//1. dfs(root) = dfs(2) =
(left = 2), //root.left
	(right = 1), //root.right
	(max = Math.max(2 + 1, 2)); //3
return Math.max(2, 1) + 1;
