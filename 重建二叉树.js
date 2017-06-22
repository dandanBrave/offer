/**
 * Created by Administrator on 2017/6/22.
 */
function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 }
function reConstructBinaryTree(pre, vin)
{
    if(pre.length==0 || vin.length==0){
        return null;
    }
    //前序第一个为根节点，也是中序左右子树的分割点
    var index = vin.indexOf(pre[0]);
    var left = vin.slice(0,index);
    var right = vin.slice(index+1);
    return{
        val : pre[0],
        left: reConstructBinaryTree(pre.slice(1,index+1),left),
        right: reConstructBinaryTree(pre.slice(index+1),right)
    };
}
module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};