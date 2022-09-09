const {Node, NNode} = require('./node')


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


//console.log(preOrderTraversal(first))




/* 
Given the root of a binary tree, return the postorder traversal of its nodes' values.

 
      1
            2
          
          3  
    

Input: root = [1,null,2,3]
Output: [3,2,1]

*/


function postOrderTraversal(root){
    const output = [];
    function _postOrderTraversal(node){
        if(node === null) return;
        _postOrderTraversal(node.left);
        _postOrderTraversal(node.right);
        output.push(node.val);
    }
    _postOrderTraversal(root);
    return output;
}


// console.log(postOrderTraversal(first));



/* 

Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal.
 Each group of children is separated by the null value (See examples)

          1

   3      2     4
    
5    6       
    



*/




const six = new NNode(6);
const five = new NNode(5);
const two2 = new NNode(2);
const four = new NNode(4);
const three3 = new NNode(3,[five, six]);
const first1 = new NNode(1,[three3, two2, four]);

// N-ary post order traversal
function postorder(root){
    const output = [];
    function _postOrder(node){
        if(node === null) return;
        if(node.children !== null){
            for(const child of node.children)
            _postOrder(child);
        }
        output.push(node.val)
    }
    _postOrder(root);
    return output;
}

// N-ary pre order traversal

function preOrder(root){
    const output = [];
    function _preOrder(node){
        if(node === null) return;
            output.push(node.val);
            const children = node.children ? node.children : [null]
            for(const child of children)
            _preOrder(child);
    }
    _preOrder(root);
    return output;
}
/* 
Note: In order traversal is't applicable for N-ary tree problem.
*/
// console.log(postorder(first1))
// console.log(preOrder(first1))


// N-ary tree level order traversal

// Impelmente with preorder traversal

function levelOrder(root){
    if(root === null)  return [];
    const output = [];
    function _levelOrder(node, output, level){
        if(output.length === level) output.push([]);
        output[level].push(node.val);
        const children = node.children ? node.children : [null];
        for(const child of children){
            if(child !== null) _levelOrder(child, output, level + 1)
        }
    }
    _levelOrder(root, output, 0)
    return output;
}
console.log(levelOrder(first1))