/**
 * Created by User on 17.05.2015.
 */
var render = function(myhtml,template, param)
{
    return (myhtml+'').replace('${'+template+'}', param)
}
module.exports = render;