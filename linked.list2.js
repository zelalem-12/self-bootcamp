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
        this._append(val, this.head)
    }

    _append(val, current){
        if(current.next === null){
            current.next = new Node(val);
            return;
        }
        this._append(val, current.next);
    }


   print(){
    const str = this._print(this.head);
    console.log(str);
   }
   _print(current){
    if(current === null){
        return "";
    }
    return current.val + " > "+ this._print(current.next)
   }

   contains(target){
    return this._contains(target, this.head)
   }
   _contains(target, current){
    if(current === null) return false;
    if(target === current.val) return true;
     return this._contains(target, current.next)
   }
}



const lsit = new LinkedList();

lsit.append('a')
lsit.append('b')
lsit.append('c')
lsit.append('d')

lsit.print();


console.log(lsit.contains('a'))
console.log(lsit.contains('b'))
console.log(lsit.contains('c'))
console.log(lsit.contains('d'))

console.log(lsit.contains('z'))
console.log(lsit.contains('x'))