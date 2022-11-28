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


   deleteValue(target){
    if(target === this.head.val) return this.head = this.head.next;
    this._deleteValue(this.head,null, target)
   }
   _deleteValue(current, prev, target){
    if(current === null) return;
    if(current.val === target) {
        prev.next = current.next;
        return ; // All node values are unique; else remove the return statment
    }
    this._deleteValue(current.next,current, target)
   }
   reverseLists(){
   return this. _reverseLists(this.head, null);
   }
   _reverseLists(current, prev){
    if(current === null) return this.head = prev;
   const next = current.next;
   current.next = prev;
   this._reverseLists(next, current)
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
// list.deleteValue('c');
list.reverseLists()
list.print();