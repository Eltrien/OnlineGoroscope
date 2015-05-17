/**
 * Created by User on 17.05.2015.
 */
var render = function(myhtml,template, param)
{
    myhtml = (myhtml+'').replace('${'+template+'}', param)
    return myhtml
}
module.exports = render;