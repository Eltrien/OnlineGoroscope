/**
 * Created by User on 17.05.2015.
 */
var top = require('./bar-top');
var render = require('./render')
var topbarLoginVisibility = function(pathname)
{
    var topbar = top();
    if (pathname == 'login' || pathname == 'registration') topbar = render(topbar, 'display-account-listing', 'none');
    else topbar = render(topbar, 'display-account-listing', 'inline-block');
    return topbar;
};
module.exports = topbarLoginVisibility;