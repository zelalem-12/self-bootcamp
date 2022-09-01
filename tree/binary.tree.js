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


/*       a

    b         c

 d    e            f


*/


a.left = b;
a.right = c;
b.left =  d;
b.right = e;
c.right = f;

// Implementing a breadth first search traversal
function BreadthFirstTraverse(root){
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

// Implementing breadth first search 
function BreadthFirstSearch(root, target){
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


BreadthFirstTraverse(a)

console.log(BreadthFirstSearch(a, 'd'));
console.log(BreadthFirstSearch(a, 'z'));


console.log("_____________________")

BreadthFirstTraverse(num1);

console.log(BreadthFirstSearch(num1, 5));
console.log(BreadthFirstSearch(num1, 9));

console.log(sumTreeWithBFT(num1))
