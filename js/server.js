/**
 * Created by User on 24.04.2015.
 */
var http=require('http');
var fs = require('fs');
var top = require('./bar-top');
var forecast = require('./bar-forecast');
var handlingLoginPage = require('./handling-page-login');
var handlingLoginReg = require('./handling-page-registration');
var render = require('./render');
var copyrighted = require('./copyrights');
var interactionCookie = require('./interaction-cookie');
var forecasts = require('./forecasts')

var server=http.createServer(function(request,response)
{
    interactionCookie.getData(function(udata) {
        var pathname = getPathname(request);
        response.write(top(pathname, udata) + forecast(pathname, udata));
        //console.log(request);
        switch (pathname) {
            case 'favicon.ico':
                return;
            case 'login':
            {
                /*console.log(response);
                 response.writeHead(200, {
                 'Set-Cookie': 'mycookie=test',
                 'Content-Type': 'text/plain'
                 });*/
                /*var user = {'name':'John'};
                 windo   sessionStorage.setItem('user', JSON.stringify(user));
                 var obj = JSON.parse(sessionStorage.getItem('user'));*/
                //localStorage;

                handlingLoginPage(request, function (data) {
                    data = copyrighted(data);
                    response.end(data);
                });
                break;
            }
            case 'registration':
            {
                /*var temp = window.sessionStorage.getItem('user');
                var viewname = $.parseJSON(temp);
                console.log(viewname);*/
                handlingLoginReg(request, function (data) {
                    data = copyrighted(data);
                    response.end(data);
                });
                break;
            }
            default :
            {
                fs.readFile('html/' + pathname + '.html', function read(err1, data) {
                    if (err1) fs.readFile('html/errorpage.html', function (err, contest) {
                        response.end(contest);
                    });
                    else {
                        data = render(data, 'commonforecast', forecasts('common'));
                        response.end(data);
                    }
                })
            }
        }
    });

});
server.listen(8000);
console.log('server started');
function getPathname(request)
{
    var pathname = request.url;
    var newpathname = pathname.substr(1);
    if (newpathname == "") newpathname = "index";
    return newpathname;
}
