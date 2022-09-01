class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');




// Implementing a breadth first search traversal
function breadthFirstTraverse(root){
    const queue = [root];

    while(queue.length > 0){
        const curr = queue.shift();
        console.log(curr.val)
        if(curr.left !== null){
            queue.push(curr.left)
        }
        if(curr.right !== null){
            queue.push(curr.right)
        }
    }
}

//  Implemening depth first traversal
 function depthFirstTraverse(root){
    const stack = [root];
    while(stack.length > 0){
        const cur = stack.pop();
        console.log(cur.val)
        if(cur.right !==null){
            stack.push(cur.right)
        }
        if(cur.left !== null){
            stack.push(cur.left)
        }
    }
}



// Implementing breadth first search 
function breadthFirstSearch(root, target){
    const queue = [root];

    while(queue.length > 0){
        const curr = queue.shift();
        if(target === curr.val) return true;
        if(curr.left !== null){
            queue.push(curr.left)
        }
        if(curr.right !== null){
            queue.push(curr.right)
        }
    }
    return false;
}

// Implementing depth first search

function depthFirstSearch(root, target){
    const stack = [root];
    while(stack.length > 0){
        const cur = stack.pop();
        if(cur.val === target) return true;
        if(cur.right !==null){
            stack.push(cur.right)
        }
        if(cur.left !== null){
            stack.push(cur.left)
        }
    }
    return false;
}



// Implementing a binary sumTree  using breadth first traversal
function sumTreeWithBFT(root){
    let sum = 0;
    const queue = [root];

    while(queue.length > 0){
        const curr = queue.shift();
        sum += curr.val;
        if(curr.left !== null){
            queue.push(curr.left)
        }
        if(curr.right !== null){
            queue.push(curr.right)
        }
    }
    return sum;
}



// Implementing summing tree using depth first search

function sumTreeWithDFT(root, target){
    const stack = [root];
    let sum = 0;
    while(stack.length > 0){
        const cur = stack.pop();
        sum += cur.val;
        if(cur.right !==null){
            stack.push(cur.right)
        }
        if(cur.left !== null){
            stack.push(cur.left)
        }
    }
    return sum;
}


// Build the tree from a list of nodes.

/*       a

    b         c

 d    e            f


*/

a.left = b;
a.right = c;
b.left =  d;
b.right = e;
c.right = f;


// Build a binary tree from a list of nodes 
/*       8

    5         4

 3    6            2


*/
const num1 = new Node(8);
const num2 = new Node(5);
const num3 = new Node(4);
const num4 = new Node(3);
const num5 = new Node(6);
const num6 = new Node(2);

num1.left = num2;
num1.right = num3;
num2.left =  num4;
num2.right = num5;
num3.right = num6;


breadthFirstTraverse(a)

console.log(breadthFirstSearch(a, 'd'));
console.log(breadthFirstSearch(a, 'z'));


console.log("_____________________")

breadthFirstTraverse(num1);

console.log(breadthFirstSearch(num1, 5));
console.log(breadthFirstSearch(num1, 9));

console.log(sumTreeWithBFT(num1))

console.log("_____________________")


depthFirstTraverse(num1);

console.log(depthFirstSearch(num1, 5));
console.log(depthFirstSearch(num1, 9));

console.log(sumTreeWithDFT(num1))