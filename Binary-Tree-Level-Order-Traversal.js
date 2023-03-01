//YouTube video solution: https://youtu.be/J8-zHqhH6kk

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [] // empty root

    const que = [root] // these are references to tree node objects
    const answer = [] // array to add other arrays into, and return at the end as our answer

    while (que.length) { // continue as long as que has values
        let queLength = que.length // keep track of que length, for use in 2nd loop to remove node objects from the que
        answer.push(que.map(node => node.val)) // create new array with current node value's in que (val's are numbers)

        while (queLength--) { // subtrack que length by 1 (continue while length > 0)
            let node = que.shift() // each iteration removes 1 node object from the que and saves in the ref variable node
            if (node.left) que.push(node.left) // if there is a node on the left of each node, add it's value to the que
            if (node.right) que.push(node.right) // if there is a node on the right of each node, add it's value to the que
        }
    }
    return answer // return answer with each row of the tree's value's mapped as a new array in it
}

//1.
que = [{3}]
answer = []

while (1) {
    queLength = 1;
    answer.push([3])
    //answer = [[3]]

    while (1) {
        node = {3}
        // que = []
        que.push({9}) // left
        que.push({20}) // right
        // que = [{9}, {20}]
    }
}

//2.
que = [{9}, {20}] // left then right tree nodes
answer = [[3]]
while (2) {
    queLength = 2;
    answer.push([9, 20])
    //answer = [[3], [9, 20]]

    while (2) {
        node = {9}
        // que = [{20}]
    }
    while (1) {
        node = {20}
        // que = []
        que.push({15}) // left
        que.push({7}) // right
        // que = [{15}, {7}]

    }
}


//3.
que = [{15}, {7}]
answer = [[3], [9, 20]]

while (2) {
    queLength = 2;
    answer.push([15, 7])
        //answer = [[3], [9, 20], [15, 7]]


    while (2) {
        node = {15}
        // que = [{7}]
    }
    while (1) {
        node = {7}
        // que = []
    }
}

//4.
que = []
answer = [[3], [9, 20], [15, 7]]

return answer
