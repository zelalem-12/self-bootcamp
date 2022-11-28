const { BinaryTree } = require('./node')


/* 
/*       8

    5         4

 3    6            2


*/

/* 
Level of a node: The number of parent nodes corresponding to a given node of the tree. 
Height of a binary tree: The number of pathes from the root node to the deepest path of the tree. 
Height of a node is : The number of paths from the root node to that node which is sequal to the level of the node

level === height(ancestor nodes equal to the number of pathes from root node to that node)


depth  = Nmper of nodes along the highest hieght of the nodes = {height === level) + 1;


To make Level order traversal we have to make know the hieght of  node;

Level order traversal or breadth first taversal is a traversal algorithm based on the level of a tree. 0, 1, 2....


To make a level order traversal we need to two things

1. Find the height of the tree
2 We need to find a way to print the nodes corresponding to every level;
*/


// Iterative Implementatiom

/** 
 * @param {TreeNode } root
 * @return {number[][]} 
 */

function levelOrderTraverse(root){
    if(root === null) return [];
    const output = [];

    const queueTree = [root];

    while(queueTree.length !== 0){
        const level = [];
        let queuedNodes = queueTree.length;

        while(queuedNodes > 0){ // Dequeue all nodes that already enqued and push thier enqueue their child
            const current = queueTree.shift();
            level.push(current.data);
            if(current.left !== null){
                queueTree.push(current.left);
            } 
            if(current.right !== null){
                queueTree.push(current.right);
            }
            queuedNodes--;
        }
        output.push(level);
    }
    return output;
}



var levelOrderBottom = function(root) {
    if(root === null) return [];
    
    const result = [];
    
    const queueTree = [root];
    
    
    while(queueTree.length > 0){
        const levelNodes  = [];
        let queuedNodes = queueTree.length;
        
        while(queuedNodes > 0){
            const current = queueTree.shift();
            queuedNodes--;
            levelNodes.push(current.data);
            if(current.left !== null) queueTree.push(current.left);
            if(current.right !== null) queueTree.push(current.right);
        }
        result.push(levelNodes);
    }
    return result.reverse()
};



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
    levelOrder: levelOrderTraverse(num1),
    levelOrderBottom:levelOrderBottom(num1)

}

console.log(data)