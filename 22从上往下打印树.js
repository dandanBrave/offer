/**
 * Created by Administrator on 2017/7/20.
 */
function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 }
function PrintFromTopToBottom(root) {
    //当结点非空时才进行操作
    if(!root) return;
    //用于存放还未遍历的元素
    var queue = [];
    //用于记录当前处理的结点
    var treeNode;
    //用于记录需要打印的结点值
    var array = [];
    //将根节点入队
    queue.push(root);
    //队列非空则进行处理
    while (queue.length()>0){
        //删除队首元素
        treeNode = queue.shift();
        //将需要打印的结点值存入数组
        array.push(treeNode.val);
        //如果左子节点不为空，则左子节点入队
        if(treeNode.left){
            queue.push(treeNode.left);
        }
        //如果右子节点不为空，则右子节点入队
        if(treeNode.right){
            queue.push(treeNode.right);
        }
    }
}
module.exports = {
    PrintFromTopToBottom : PrintFromTopToBottom
};
