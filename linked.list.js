class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    append(val){
        if(this.head === null){
            this.head = new Node(val);
            return;
        }
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
    current.next =  new Node(val);
}

   print(){
    let str = '';
    let current = this.head;
    while(current !== null){
        str+= `${current.val} > `;
        current = current.next;
    }   
    console.log(str);
   }
   contains(target){
    let current = this.head;
    while(current !==null){
        if(target === current.val){
            return true;
        }
        current = current.next;
    }
    return false;
   }
}



const lsit = new LinkedList();

lsit.append('a')
lsit.append('b')
lsit.append('b')
lsit.append('d')

lsit.print();


console.log(lsit.contains('a'))
console.log(lsit.contains('b'))
console.log(lsit.contains('b'))
console.log(lsit.contains('d'))

console.log(lsit.contains('z'))
console.log(lsit.contains('x'))