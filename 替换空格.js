/**
 * Created by Administrator on 2017/6/22.
 */
function replaceSpace(str){
    var newstr;
    newstr = str.replace(/\s+?/g,"%20");
    return newstr;
}
module.exports = {
    replaceSpace : replaceSpace
};