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
var maxDepth = function(root) {
    if (root === null) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

//maxDepth(3)
//1st ROOT root = 3: return 1 + Math.max(maxDepth(9)=1, maxDepth(20)=2) return 1 + 2 = 3

//LEFT NODE of ROOT
//2nd L root = 9: return 1 + Math.max(maxDepth(null)=0, maxDepth(null)=0) return 1 + (0) = 1
//3rd L root = null: return 0
//4th R root = null: return 0


//RIGHT NODE of ROOT
//5th R root = 20: return 1 + Math.max(maxDepth(15)=1, maxDepth(7)=1) = return 1 + 1 = 2
//6th L root = 15: return 1 + Math.max(maxDepth(null)=0, maxDepth(null)=0) return 1 + (0) = 1
//7th L root = null: return 0
//8th R root = null: return 0
//9th root =  7: return 1 + Math.max(maxDepth(null)=0, maxDepth(null)=0)  return 1 + 0 = 1
//10th L root = null: return 0
//11th R root = null: return 0
