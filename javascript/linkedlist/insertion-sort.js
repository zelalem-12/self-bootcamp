/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function insertList(sortedHead, newNode){
    if(sortedHead === null || sortedHead.val >= newNode.val){
        newNode.next = sortedHead;
        return newNode;
    }
    
    let curr = sortedHead;
    
    while(curr.next !== null && curr.next.val < newNode.val) curr = curr.next;
    
    newNode.next = curr.next;
    curr.next = newNode;
    
    return sortedHead;
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function insertionSortList(head) {

    
    let curr = head;
    let sortedListHead = null;
    
    
    while(curr !== null){
        const currNext = curr.next;
        sortedListHead = insertList(sortedListHead, curr);
        curr = currNext;
    }
    
    return sortedListHead;
    
};