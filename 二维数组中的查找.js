/**
 * 在一�?二维数组�?，每一行都按照从左到右递�?�的顺序排序�?
 * 每一列都按照从上到下递�?�的顺序排序。�?�完成一�?函数�?
 * 输入这样的一�?二维数组和一�?整数�? 判断数组�?�?否含有�?�整数�?
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