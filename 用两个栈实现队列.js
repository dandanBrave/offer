/**
 * Created by Administrator on 2017/6/23.
 */
var stack1 = [],
    stack2 = [];
function push(node){
    stack1.push(node);
}
function pop(){
    if(stack2<=0){
        while(stack1.length>0){
            stack2.push(stack1.pop());
        }
    }
    return stack2.pop();
}
module.exports = {
    push : push,
    pop : pop
};
