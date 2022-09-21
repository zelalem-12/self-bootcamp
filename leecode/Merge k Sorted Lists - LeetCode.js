/**
 * Definition for singly-linked list.
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }


//  Brute Force Solution 

/**
* @param {ListNode[]} lists
* @return {ListNode}
*/
function mergeKLists(lists) {
   
   const arr = [];
   
   for(let i = 0; i < lists.length; i++){
       let curr = lists[i];
       while(curr !== null){
           arr.push(curr.val);
           curr = curr.next;
       }
   }
   
   arr.sort((a, b) => a  - b);
   
   let  curr = new ListNode();
   const head = curr;
   for(let i = 0; i < arr.length; i++){
       curr.next = new ListNode(arr[i]);
       curr = curr.next;
   }
   
   return head.next;
};