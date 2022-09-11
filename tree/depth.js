const { BinaryTree } = require('./node')

function treeHeight(root) {
    function _treeHeight(node){
        if(node === null) return -1;
        const LeftDepth = _treeHeight(node.left);
        const rightDepth = _treeHeight(node.right);
        return Math.max(LeftDepth, rightDepth) + 1;
    }
   return _treeHeight(root);
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
    depth: treeHeight(num1)
}

console.log(data)