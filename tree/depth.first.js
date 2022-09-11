const { BinaryTree } = require('./node')

/* 
Depth first traversal uses stack data structure

We visit each node three times in recursive DFT implementatio 

#1: When the the recursion visits the node comming from the top.
     Pre Order traverstal process the nodes at this stage.

#2: When he recursion backtrack from the left child after visiting all nodes in the left subtree trees.
     In Order traversal process the nodes at this stage.

#3: When the recursion backtrack from the right child after visiting all nodes in the right subtree nodes.
        Post order traversal  process the nodes at this stage.
*/



// Pre order traversal iteratibe and recursive;
function preOrderTraversal(root){
    if(root === null)  return []

    const result = [];
    

    // Iterative solution 

    const stackTree = [];
    let current = root;
     while(current !== null || stackTree.length !== 0){
        if(current !== null ){
            result.push(current.data);
            if(current.right !== null) stackTree.push(current.right);
            current = current.left;
        }
        else current = stackTree.pop();
        
     }


     // Recursive Solution 

    //  function _preOrderTraversal(node){
    //     if(node ===null) return;
    //     result.push(node.data);
    //     _preOrderTraversal(node.left);
    //     _preOrderTraversal(node.right);
    //  }
    //  _preOrderTraversal(root);
     
     return result;
}


// In order traversal iteratibe and recursive;
function inOrderTraversal(root){
    if(root === null)  return []
    const result = [];
    

    // Iterative solution 

    const stack = [];
    let current = root;

    while(current !== null  || stack.length !== 0){
        if(current !== null){
            stack.push(current) // push the the current node for latter to backtrack to it and visit it self and its right sub tree
            current = current.left;
        } else {
            current = stack.pop();
            result.push(current.data);
            current = current.right;            
        }
    }

     // Recursive Solution 

    //  function _inOrderTraversal(node){
    //     if(node ===null) return;   
    //     _inOrderTraversal(node.left);
    //      result.push(node.data);
    //      _inOrderTraversal(node.right);
    //  }
    //  _inOrderTraversal(root);
     
     return result;
}




// Post order traversal iteratibe and recursive; Li Ri R
function postOrderTraversal(root){
    if(root === null)  return []
    const result = [];

    // Iterative solution    4, 6, 

    //  const stack = [];
    //  let current  = root;
    //     while(current !== null || stack.length > 0){
    //         while(current !== null)  {
    //            if(current.right !== null){
    //             stack.push(current.right);
    //            } 
    //             current = current.left;
    //         } 
    //         current = stack.pop();
    //         result.push(current.data);
    //         current = current.right;
    //     }
     

     // Recursive Solution 

     function _postOrderTraversal(node){
        if(node === null) return;   
        _postOrderTraversal(node.left);
        _postOrderTraversal(node.right);
         result.push(node.data);
     }
     _postOrderTraversal(root);
     
     return result;
}







// Driving data


// Build a binary tree from a list of nodes 
/*       8

    5         4

 3    6            2


*/
const num1 = new BinaryTree(8);
const num2 = new BinaryTree(5);
const num3 = new BinaryTree(4);
const num4 = new BinaryTree(3);
const num5 = new BinaryTree(6);
const num6 = new BinaryTree(2);

num1.left = num2;
num1.right = num3;
num2.left =  num4;
num2.right = num5;
num3.right = num6;


const data = {
    preOrder:preOrderTraversal(num1),
    inOrder:inOrderTraversal(num1),
    postOrder:postOrderTraversal(num1)
}
console.log(data)