const Node = require('./node')


/* 
Given the root of a binary tree, return the inorder traversal of its nodes' values.

      1
            2
          
          3  
    
 
Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
*/

// Solution 

const three = new Node(3);
const two = new Node(2, three);
const first = new Node(1, null, two);


function inOrderTraversal(root){
    const result = [];
    
    function _inOrderTraversal(node){
        if(node === null) return;
        _inOrderTraversal(node.left);
        result.push(node.val)
        _inOrderTraversal(node.right);
    }
    _inOrderTraversal(root);
    return result;
}

console.log(inOrderTraversal(first))