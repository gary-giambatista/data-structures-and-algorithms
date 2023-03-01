//YouTube video solution: https://youtu.be/_0hqO9mOC3M

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
	let res = true;

	const dfs = (node) => {
		if (!node) {
			return 0;
		}
		let left = dfs(node.left);
		let right = dfs(node.right);

		if (Math.abs(left - right) > 1) {
			res = false;
		}
		return Math.max(left, right) + 1;
	};
	dfs(root);
	return res;
};

//1. dfs(root) -> root = 3 -> dfs(3)
left = dfs(9);
right = dfs(20);
Math.abs(left - right) > 1 ? (res = false) : null;
return Math.max(left, right) + 1;

right = dfs(null);
Math.abs(left - right) > 1 ? (res = false) : null;
return Math.max(left, right) + 1;

//3. LEFT dfs(null)
return 0;

//4. RIGHT dfs(null)
return 0;

//2. LEFT dfs(9)
left = 0;
right = 0;
Math.abs(0 - 0) > 1 ? (res = false) : null;
return Math.max(0, 0) + 1;

//1. dfs(root) -> root = 3 -> dfs(3)
left = 1;
right = dfs(20);
Math.abs(1 - right) > 1 ? (res = false) : null;
return Math.max(1, right) + 1;

//5. RIGHT dfs(20)
left = dfs(15);
right = dfs(7);
Math.abs(left - right) > 1 ? (res = false) : null;
return Math.max(left, right) + 1;

//6. dfs(15)
left = dfs(null);
right = dfs(null);
Math.abs(left - right) > 1 ? (res = false) : null;
return Math.max(left, right) + 1;

//7. LEFT dfs(null)
return 0;

//8. RIGHT dfs(null)
return 0;

//6. dfs(15)
left = 0;
right = 0;
Math.abs(0 - 0) > 1 ? (res = false) : null;
return Math.max(0, 0) + 1;

//5. RIGHT dfs(20)
left = 1;
right = dfs(7);
Math.abs(1 - right) > 1 ? (res = false) : null;
return Math.max(1, right) + 1;

//9. dfs(7)
left = dfs(null);
right = dfs(null);
Math.abs(left - right) > 1 ? (res = false) : null;
return Math.max(left, right) + 1;

//10. LEFT dfs(null)
return 0;

//11. RIGHT dfs(null)
return 0;

//9. dfs(7)
left = 0;
right = 0;
Math.abs(0 - 0) > 1 ? (res = false) : null;
return Math.max(0, 0) + 1;

//5. RIGHT dfs(20)
left = 1;
right = 1;
Math.abs(1 - 1) > 1 ? (res = false) : null;
return Math.max(1, 1) + 1;

//1. dfs(root) -> root = 3 -> dfs(3)
left = 1;
right = 2;
Math.abs(1 - 2) > 1 ? (res = false) : null;
return Math.max(1, right) + 1;
