/**
 * Created by User on 18.05.2015.
 */
var forecast = function(pathname)
{
    var string;
    if (pathname == 'login' || pathname == 'registration' || pathname == 'errorpage') string = '';
    else
    {
        string = '' +
        '<div id="forecast">' +
        '<h1>Your forecast</h1>' +
        '<p>qwerqwerwqerwqer  qwerqwerqweq werqwerq werqwerwqer qwerqwerqw erqwerqwerqwer qwerqw  erqwerwqerqwer qwerqwerqwer   qwerqwerqwerq werqwerqwerqwer</p>' +
        '</div>';
    }
    return string;
}
module.exports = forecast;