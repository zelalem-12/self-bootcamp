// Queue is used for first in first out order
// Queue is used of traking a requests for a limited resources
// Queue is used in graph algorithm     


// Linked list implementation of Queue;

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}



class Queue{
    constructor(){
        this.front= null;
        this.back = null;
        this.size = 0;
    }

    enqueue(val){
        const enqueuedNode = new Node(val);
        if(this.size === 0){
            this.front = enqueuedNode;
            this.back = enqueuedNode;
        }else {
            this.back.next = enqueuedNode;
            this.back = enqueuedNode;
        }
        this.size++;
    }

    dequeue(){
        if(this.size === 0) return null;
        if(this.size === 1) this.back = null;
        const frontNode = this.front;
        this.front = this.front.next;
        this.size--;

        return frontNode.val;
    }
}

const queue = new Queue();

queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');

console.log(queue.size, queue.front.val, queue.back.val);
queue.dequeue();
console.log(queue.size, queue.front.val, queue.back.val);

queue.dequeue();
console.log(queue.size, queue.front, queue.back);
queue.dequeue();

console.log(queue.size, queue.front, queue.back);