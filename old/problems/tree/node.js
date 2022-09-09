class Node{
    constructor(val, left, right){
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}


class NNode{
    constructor(val, children){
        this.val = val === undefined ? 0 : val;
        this.children =  children === undefined ? null : children;
    }
}

module.exports = {Node, NNode};