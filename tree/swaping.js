const { BinaryTree } = require('./node')

function  binaryNodeSwap(root){
    function swap(node){
        if(node === null) return node;
        const left = node.left;
        node.left = node.right;
        node.right = left;
        swap(node.left);
        swap(node.right);
    }
    swap(root)
    return root;
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


console.log(binaryNodeSwap(num1))