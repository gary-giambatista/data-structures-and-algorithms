//YouTube video solution: https://youtu.be/Ypj59OBqxnk

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	//if statements check both roots first
	if (!p && !q) return true; // both null = both same, return true
	if (!p || !q || p.val !== q.val) return false; // just 1 null or different values, return false

	//if they pass => start recursion
	//first check .left of both           then check .right of both
	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

//EXAMPLE: p = [1, 2, 3],  q = [1, 2, 3] -> isSameTree(p, q)

//1.isSameTree(1, 1) ROOT
//   .left                   .right
return isSameTree(2, 2) && isSameTree(3, 3);

//3. isSameTree(2, 2) => NOW isSameTree(null, null) LEFT && WAITING isSameTree(null, null) RIGHT
isSameTree(null, null); //LEFT
if (!p && !q) return true;

//2. isSameTree(2, 2) LEFT = true && NEXT isSameTree(null, null) RIGHT
isSameTree(2, 2);
//    .left           .right
return true && isSameTree(null, null);

//4. isSameTree(2, 2) LEFT = true && NOW isSameTree(null, null) RIGHT
isSameTree(null, null); //RIGHT
if (!p && !q) return true;

//2. isSameTree(2, 2) LEFT
isSameTree(2, 2);
//     .left   .right
return true && true;
return true;

//1.isSameTree(1, 1) ROOT
//   .left          .right
return true && isSameTree(3, 3);

//5. LEFT = true && NOW isSameTree(3, 3) RIGHT
isSameTree(3, 3);
//          .left                    .right
return isSameTree(null, null) && isSameTree(null, null);

//6. isSameTree(3, 3) = NOW isSameTree(null, null) LEFT && WAITING isSameTree(null, null) RIGHT
isSameTree(null, null); //LEFT
if (!p && !q) return true;

//5. isSameTree(2, 2) LEFT = true && NEXT isSameTree(3, 3) RIGHT
isSameTree(3, 3);
//    .left            .right
return true && isSameTree(null, null);

//7. isSameTree(3, 3) LEFT = true && NOW isSameTree(null, null) RIGHT
isSameTree(null, null); //RIGHT
if (!p && !q) return true;

//5. isSameTree(2, 2) LEFT = true && RIGHT = true
isSameTree(3, 3);
//    .left   .right
return true && true;
return true;

//1.isSameTree(1, 1) ROOT
//     .left   .right
return true && true;
return true;

//CORRECT EXPLANATION

//1.isSameTree(1, 1) ROOT
//        .left                .right
return isSameTree(2, 2) && isSameTree(3, 3);

//2. isSameTree(2, 2) LEFT TREE
//          .left                    .right
return isSameTree(null, null) && isSameTree(null, null);

//3. isSameTree(null, null) LEFT CHILD
isSameTree(null, null);
if (!p && !q) return true;

//2. isSameTree(2, 2) LEFT TREE
isSameTree(2, 2);
//    .left           .right
return true && isSameTree(null, null);

//4. isSameTree(null, null) RIGHT CHILD
isSameTree(null, null);
if (!p && !q) return true;

//2. isSameTree(2, 2) LEFT TREE
isSameTree(2, 2);
//     .left   .right
return true && true;
return true;

//1.isSameTree(1, 1) ROOT
//   .left          .right
return true && isSameTree(3, 3);

//5. isSameTree(3, 3) RIGHT TREE
isSameTree(3, 3);
//          .left                    .right
return isSameTree(null, null) && isSameTree(null, null);

//6. isSameTree(null, null) LEFT CHILD
isSameTree(null, null);
if (!p && !q) return true;

//5. isSameTree(3, 3) RIGHT TREE
isSameTree(3, 3);
//    .left            .right
return true && isSameTree(null, null);

//7. isSameTree(null, null) RIGHT CHILD
isSameTree(null, null);
if (!p && !q) return true;

//5. isSameTree(3, 3) RIGHT TREE
isSameTree(3, 3);
//    .left   .right
return true && true;
return true;

//1.isSameTree(1, 1) ROOT
//     .left   .right
return true && true;
return true;

//extra example

//1.isSameTree(1, 1) ROOT
//   .left          .right
return false && isSameTree(1, 2);
return false;
