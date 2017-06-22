/**
 * Created by Administrator on 2017/6/22.
 *   在一个二维数组中，每一行都按照从左到右递增的顺序排序，
 *   每一列都按照从上到下递增的顺序排序。请完成一个函数，
 *   输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */
function Find(target, array)
{
    var row = array.length;
    var i = row - 1;
    var j = 0;
    while(i >= 0 && array[i][j]) {
        if(target > array[i][j]) {
            j++;
        } else if(target < array[i][j]) {
            i--;
        } else {
            return true;
        }
    }
    return false;
}
module.exports = {
    Find : Find
};