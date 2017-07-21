function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function PrintFromTopToBottom(root) {
    //当结点非空时才进行操作
    if(!root) return [];
    //用于存放还未遍历的元素
    var q = [];
    //用于记录需要打印的结点值
    var array = [];
    //将根节点入队
    q.push(root);
    //队列非空则进行处理
    while (q.length>0){
        //删除队首元素
        var node = q.shift();
        //将需要打印的结点值存入数组
        array.push(node.val);

        //如果左子节点不为空，则左子节点入队
        if(node.left){
            q.push(node.left);
        }
        //如果右子节点不为空，则右子节点入队
        if(node.right){
            q.push(node.right);
        }
    }
    return array;
}
module.exports = {
    PrintFromTopToBottom : PrintFromTopToBottom
};
