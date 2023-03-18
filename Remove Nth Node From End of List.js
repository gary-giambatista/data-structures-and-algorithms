/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(null, head);
    let left = dummyHead;
    let right = head;
    // set the distance between left and right as n
    while ( n > 0 ) {
        right = right.next;
        n -= 1
    }
    //walk down the LL until we reach the end, updating left and right
    while (right) { // runs 3 times for n = 2
        left = left.next;
        right = right.next; // last value = null
    }
    //update left.next to skip 1 node between left and right
    left.next = left.next.next;
    return dummyHead.next
};
