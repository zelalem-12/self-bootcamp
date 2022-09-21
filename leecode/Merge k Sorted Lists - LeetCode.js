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



// Merge the two lists one by one;

  function mergeTwoListsBrutFOrce(listOne, listTwo){
    if(listOne  === null) return listTwo;
    if(listTwo === null) return listOne;
    
    let curr = null;
    
    if(listOne.val <= listTwo.val){
        curr = listOne;
        listOne = listOne.next;
    } else {
        curr = listTwo;
        listTwo = listTwo.next;
    }
    
    const head = curr;
    
    while(listOne !== null && listTwo !== null){
        if(listOne.val <= listTwo.val){
            curr.next = listOne;
            listOne = listOne.next;
        } else {
            curr.next = listTwo;
            listTwo = listTwo.next;
        }
        curr = curr.next;
    }
    
    if(listOne !== null) curr.next = listOne;
    if(listTwo !== null) curr.next = listTwo;
    
    return head;
    
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 function mergeKListsOneByONe(lists) {
    const listsCount = lists.length;
    if(listsCount === 0) return null;
    if(listsCount === 1) return lists[0];
    
    let head = mergeTwoLists(lists[0], lists[1]);
    
    for(let i = 2; i < listsCount; i++){
        head = mergeTwoLists(head, lists[i])
    }
    
    
    return head;
};