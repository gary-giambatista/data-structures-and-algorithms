//Time Complexity: O(N)
//Space Complexity: O(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    //split the list into 2 lists
    let slow = head;
    let fast = head.next; //ofset of 1 index *keep distance of 2 always

    while (fast && fast.next) {
        slow = slow.next; //increment by 1
        fast = fast.next.next; //increment by 2
    }
    secondListHead = slow.next; // set the head of the 2nd list offset by 1
    slow.next = null; // cap off the first list
    let previous = null;

    //reverse the 2nd list
    while (secondListHead) {
        const next = secondListHead.next;
        secondListHead.next = previous;
        previous = secondListHead; // becomes the head of the 2nd list
        secondListHead = next; // becomes null
    }

    //join the 2 lists in alternating order
    let firstList = head;
    let secondList = previous;
    while (secondList) { // eventually hits line 21 which becomes pointer to null
        const firstListNext = firstList.next; //temp copy of first list's next
        const secondListNext = secondList.next; // temp copy of 2nd list's next
        firstList.next = secondList; // set first list.next to current previous node
        secondList.next = firstListNext; // set previous.next to copy of first list's next
        secondList = secondListNext; // increment previous to next node, reached end and stops
        firstList = firstListNext // increment first list to next node
    }
};
