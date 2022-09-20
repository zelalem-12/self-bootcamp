/**
 * Definition for singly-linked list.
 */

 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}



function getMid(head){
  
  let slow = head;
  let fast = head.next;
  
  while(fast && fast.next){
      console.log(fast, fast.next)
      slow = slow.next;
      fast = fast.next.next;
  }
  console.log(slow)
  return slow;
}

function merge(list1, list2){
  
  if(list1 ===  null) return list2;
  if(list2 === null) return list1;
  
  const temp = new ListNode();
  const head  = temp;
  while(list1 && list2 ){
      if(list1.val < list2.val) {
          temp.next = list1; 
          list1 = list1.next;
      }else {
          temp.next = list2;
          list1 = list2.next;
      }
  }
  if(list1) temp.next = list1;
  if(list2) temp.next = list2;
      
  return temp;
}

/**
* @param {ListNode} head
* @return {ListNode}
*/
var sortList = function(head) {
  
  if(head === null || head.next === null ) return head;
  
  let middle = getMid(head);
  
  let left = head;  
  let right = middle.next;
  middle.next = null;
  
  
  sortList(left);
  sortList(right);
  
  return merge(left, right);
};