/**
 * Created by User on 24.04.2015.
 */
var clock = require('./time');
var top_account = function()
{
    var accString;
    accString = '' +
        '<div class="topbar-account-listing">' +
            '<div class="topbar-account-list">' +
                '<form id="login-form" action="/auth.js" autocomplete="off" method="post">' +
                    '<input type="text" class="topbar-input" id="login-form-username" name="username" maxlength="32" placeholder="Username" required>' +
                    '<input type="password" class="topbar-input" id="login-form-password" name="password" maxlength="32" placeholder="Password" required>' +
                    '<input type="submit" class="topbar-account-login" value="LOGIN">' +
                '</form>' +
            '</div>' +
            '<div class="topbar-account-list"><a href="registration" class="topbar-account-register">register</a></div>' +
        '</div>';
    var string;
    string = '<div id="topbar-bar">' +
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