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
   deleteValue(target){
    if(this.head.val === target) return this.head = this.head.next;
    let prev = null;
    let current = this.head;
    while(current !== null){
        if(target === current.val){
            prev.next = current.next;
        }
        prev = current;
        current = current.next;
    }
    return this.head;
   }
   reverseLists(){
    let prev = null;
    let current = this.head;

    while(current !== null){  
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.head = prev;
    console.log(this.head)
    return this.head;
   }
}



const list = new LinkedList();

list.append('a')
list.append('b')
list.append('c')
list.append('d')

list.print();


console.log(list.contains('a'))
console.log(list.contains('b'))
console.log(list.contains('c'))
console.log(list.contains('d'))

console.log(list.contains('z'))
console.log(list.contains('x'))

// list.deleteValue('a');
list.reverseLists()
list.print();
