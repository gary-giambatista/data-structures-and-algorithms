/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) { return root 
    }
    let temp = root.right
    root.right = root.left
    root.left = temp
    invertTree(root.right)
    invertTree(root.left)
    
    return root
};
