/**
 * Created by User on 18.05.2015.
 */
var interactionCookie = function (uname, udate)
{
    if (arguments.length == 0)
    {
        console.log(getCookie('username'));
        console.log(getCookie('bDate'));
    }
    if (arguments.length == 1)
    {

    }
    if (arguments.length == 2)
    {
        setCookie('username',uname);
        setCookie('bDate',udate);
    }
};
module.exports = interactionCookie;

function getCookie(name) {
    var cookie = " " + document.cookie;
    var search = " " + name + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = cookie.indexOf(";", offset)
            if (end == -1) {
                end = cookie.length;
            }
            setStr = unescape(cookie.substring(offset, end));
        }
    }
    return(setStr);
}
function setCookie (name, value, expires, path) {
    document.cookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}