/**
 * Created by Administrator on 2017/7/21.
 * 输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 */
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function FindPath(root, expectNumber)
{
    // write code here
    var res = [];
    var temp = [];
    dfs(res, temp, root, expectNumber);
    return res;
}
function dfs(res, temp, root, expectedNumber) {
    if(root == null){
        temp.push(0);
        return;
    }
    temp.push(root.val);
    if(root.left == null && root.right == null){
        if(root.val == expectedNumber){
            res.push(temp.slice(0));
            return;
        }
    }
    dfs(res, temp, root.left, expectedNumber - root.val);
    temp.pop();
    dfs(res, temp, root.right, expectedNumber - root.val);
    temp.pop();

}