/**
 * Created by User on 24.04.2015.
 */
var interactionCookie = require('./interaction-cookie');
var top_account = function(pathname)
{
    var accString;
    if (pathname == 'login' || pathname == 'registration') accString = '';
    else if (1 == 0)
    {
        accString = '' +
        '<div class="topbar-account-listing">' +
            '<div class="topbar-account-welcome">' +
                'Hi, user' +
            '</div>' +
        '</div>';
    }
    else
    {
        accString = '' +
        '<div class="topbar-account-listing">' +
            '<div class="topbar-account-list">' +
            '<form id="login-form" action="/login" autocomplete="off" method="post">' +
                '<input type="text" class="topbar-input" id="login-form-username" name="username" maxlength="32" placeholder="Username">' +
                '<input type="password" class="topbar-input" id="login-form-password" name="password" maxlength="32" placeholder="Password">' +
                '<input type="submit" class="topbar-account-login" value="LOGIN">' +
            '</form>' +
        '</div>' +
        '<div class="topbar-account-list">' +
            '<a href="registration" class="topbar-account-register">register</a></div>' +
        '</div>';
    }
    var string;
    string = '' +
    '<div id="topbar-bar">' +
    '<div class="topbar-content">' +
        '<div class="topbar-icon">' +
            '<a class="mainicon" href="/"></a>' +
        '</div>' +
        '<div class="topbar-links">' +
            '<div class="topbar-listing">' +
                '<div class="topbar-list"><a href="forecast" class="topbar-list-element">forecasts</a></div>' +
                '<div class="topbar-list"><a href="errorpage" class="topbar-list-element">error page</a></div>' +
            '</div>' +
        '</div>' +
        '<div class="topbar-account">' + clock() +
            accString +
        '</div>' +
    '</div>' +
    '</div>';
    return string;
}
module.exports = top_account;

var clock = function()
{
    var now = new Date();
    var d = now.getUTCDate(); var dd = d; if(d<10) dd = '0'+d;
    var m = now.getUTCMonth() + 1;	var mm = m; if(m<10) mm = '0'+m;
    var yyyy = now.getUTCFullYear(); var yy = yyyy - 2000; if(yy<10) yy = '0'+yy;
    var h = now.getHours(); var hh = h; if(h<10) hh='0'+h;
    var n = now.getUTCMinutes(); var nn = n; if(nn<10) nn='0'+n;
    var s = now.getUTCSeconds(); var ss = s; if(ss<10) ss='0'+s;
    var s = new String('%hh:%nn %dd.%mm.%yyyy');
    s = s.replace( new RegExp("%dd"), dd);
    s = s.replace( new RegExp("%mm"), mm);
    s = s.replace( new RegExp("%yyyy"), yyyy);
    s = s.replace( new RegExp("%hh"), hh);
    s = s.replace( new RegExp("%nn"), nn);
    s = s.replace( new RegExp("%ss"), ss);
    return '<div class="time">'+s+'</div>';
};