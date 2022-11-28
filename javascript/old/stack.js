// used for step tracking 
// browser history
// Backtracking algorthim

// Stack has three operations 
// push pop and access top elemnt




class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.size = 0;

    }
    push(val){
        if(this.size === 0){
            this.top = new Node(val)
        }else {
            const currentItem = new Node(val);
            currentItem.next = this.top;
            this.top = currentItem;
        }
        this.size++;
    }
    pop(){
        if(this.size === 0) return null;
        const topNode = this.top;
        this.top = this.top.next;
        this.size--;
        return topNode.val;
    }
    getTop(){
        return this.top.val;
    }
}


const stack = new Stack();
stack.push('a')
stack.push('b')
stack.push('c')
stack.push('d')
console.log(stack.size, stack.top);

stack.pop('d');
stack.pop('c')

console.log(stack.getTop());
