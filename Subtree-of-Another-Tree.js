//YouTube video solution: https://youtu.be/EvnM9sAqU4M

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    function isSameTree(root, subRoot) {
        if (!root && !subRoot) return true; // reached the end without returning false
        if (!root || !subRoot || root.val !== subRoot.val) return false; // not a match conditions
        //keep checking to the left and right. If either is false, immediately return false
        return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)
    }

    if (!subRoot) return true; // empty subRoot
    if (!root) return false; // empty root, but subRoot
    if (isSameTree(root, subRoot)) return true; // check if this point in root matches subRoot completely

    // if NOT, check to the left and right node in root (if either is true immediately return true)
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot) 
};

//1. isSubtree(root, subRoot) = isSubTree(3, 4)
isSubTree(3, 4)

//2. Check if they are the same
isSameTree(3, 4)
return false

//3. check root.left aganist subRoot
return isSubtree(4, 4) || isSubtree(root.right, subRoot)

//4. trees/subroots match!
isSameTree(4, 4)
return true

//3. return up true to isSubtree(4, 4)
return true || isSubtree(root.right, subRoot)

//1. return up true to isSubtree(3, 4) 
return true || isSubtree(root.right, subRoot)
return true
