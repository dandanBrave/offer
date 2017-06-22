/**
 * Created by Administrator on 2017/6/22.
 * 输入一个链表，从尾到头打印链表每个节点的值。
 */
function printListFromTailToHead(head)
{
    if(!head){
        return 0;
    }else{
        var array = new Array();
        for(var q=head;q;q=q.next){
            array.push(q.val);
        }
        array.reverse();
        return array;
    }
}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};