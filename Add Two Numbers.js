/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(); //initialize an empty node in front of the node
    let current = dummy; // iterate through the LL using current

    let remainder = 0; // carry over any aditional number from column arithmatic
    while (l1 || l2 || remainder) { // need remainder here in case last column is 10 or above
        const value1 = l1 ? l1.val : 0 // if node, set as value, otherwise 0 for arithmatic
        const value2 = l2 ? l2.val : 0 // if not, set as value, otherwise 0 for arithmatic

        let total = value1 + value2 + remainder; // calculate total
        let value = total % 10; // the right side of, "11" gets first decimal place
        remainder = Math.floor(total / 10); //gets left side of "11" anything over 10 returns 1
        current.next = new ListNode(value); //create next node, set as new node with value

        current = current.next; // increment the current node to the next node
        l1 = l1 ? l1.next : null; // if there is another node, set l1 to it
        l2 = l2 ? l2.next : null; // if there is another node, set l2 to it
    }
    return dummy.next; // use dummy to return the LL's node values we set
};
