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

//console.log(inOrderTraversal(first))


/* 

Given the root of a binary tree, return the preorder traversal of its nodes' values.

      1
            2
          
          3  
    

Input: root = [1,null,2,3]
Output: [1,2,3]
*/


function preOrderTraversal(root) {
    const output = [];
   function _preOrderTraversal(node){
        if(node === null) return;
        output.push(node.val)
         _preOrderTraversal(node.left);
         _preOrderTraversal(node.right);
    }
    _preOrderTraversal(root);
    return output;
};


console.log(preOrderTraversal(first))