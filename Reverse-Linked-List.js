//YouTube video solution: https://youtu.be/hrE1-qHQIhk

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // declare 2 varibles bc we need to update them
    let current = head;
    let previous = null;

    while (current) {
        // 4 steps
       const next = current.next;
       current.next = previous;
       previous = current;
       current = next;
    }

    // return the new head
    return previous
};
