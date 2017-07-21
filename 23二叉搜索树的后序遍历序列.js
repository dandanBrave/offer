/**
 * Created by Administrator on 2017/7/21.
 */
/*
 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 */
function VerifySquenceOfBST(sequence) {
    var length = sequence.length;
    var root = sequence[length-1];
    if(sequence == null || length == 0){
        return false;
    }
    if(sequence.length==1)
        return true;
    //在二叉搜索树中左子树的结点小于根节点
    var i = 0;
    var left = [];
    var right = [];
    for(;i<length-1;i++){
        if(sequence[i]<root){
            left.push(sequence[i]);
        }else break;
    }
    var j = i;
    for(;j<length-1;j++){
        if(sequence[j]<root){
            return false;
        }else {
            right.push(sequence[j]);
        }
    }
    if(left.length==0){
        return VerifySquenceOfBST(right);
    }
    if(right.length==0){
        return VerifySquenceOfBST(left);
    }
    return VerifySquenceOfBST(left)&&VerifySquenceOfBST(right);
}
var seq = [7,6,4,5];
console.log(VerifySquenceOfBST(seq));
