// to be studied 
function levelOrderTraverse(root){
    if(root === null) return [];
    const output = [];
    function _levelOrderTraverse(node, output, level){
        if(level === output.length ) output.push([]);
        output[level].push(node.val);
        if(node.left !== null) _levelOrderTraverse(node.left, output, level + 1);
        if(node.right !== null) _levelOrderTraverse(node.right, output, level + 1) 
    }
    _levelOrderTraverse(root, output, 0)
    return output;
}






// N-ary tree level order traversal

// Impelmente with preorder traversal

function levelOrder(root){
    if(root === null)  return [];
    const output = [];
    function _levelOrder(node, output, level){
        if(output.length === level) output.push([]);
        output[level].push(node.val);
        const children = node.children ? node.children : [null];
        for(const child of children){
            if(child !== null) _levelOrder(child, output, level + 1)
        }
    }
    _levelOrder(root, output, 0)
    return output;
}