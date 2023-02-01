var mergeTwoLists2 = function (list1, list2){
    const linkedList = new ListNode(); // create a linked list, it has 3 properties to use: head = null, .val = null, .next = null
    const beforeHead = linkedList; // occupies the range just before the linked list

    //null, 1, 2, 3, 4, null
    //null, 1, 2, 3, 4, 5, 6, 7, null

    //need 2 interations: 1. both lists have nodes (need to compare), 2: only 1 list has values (attach the list with node(s) to our created linkedList)
    //1. IF BOTH lists HAVE NODES
    while (list1 && list2) {
        if (list1.val < list2.val) {
            linkedList.next = list1 // push entire node onto our created linkedList
            list1 = list1.next //increment list1 to the next node (we already checked the current nodde)
        } else {
            linkedList.next = list2
            list2 = list2.next
        }
        linkedList = linkedList.next // increment our created linkedList to the next node THAT we just ADDED -- need to add onto that node next
    }
    //2. if ONLY 1 Linked list has values (aka. 1 is undefined since it reached the end)
    if (list1) { // if list 1 still has valid nodes
        linkedList.next = list1 // attach the rest of list1 and all it's node to our linkedList
    }
    if (list2) { // if list2 still has valid nodes
        linkedList.next = list2
    }
    return beforeHead.next // use the node.next before head to get the linkedList head and that gives the entire linkedList
}
