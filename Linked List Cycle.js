//2 pointer fast/slow solution
//Time complexity O(n)
//Space complexity O(1)
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) return false;
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};


//map solution
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || head.next === null) return false;
    let current = head;
    const map = new Map();

    while (current) {
        const nodeExists = map.get(current)
        if (nodeExists) {
            return true;
        } else {
            map.set(current, 1)
            current = current.next
        }
    }
    return false
};
