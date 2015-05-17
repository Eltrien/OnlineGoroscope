/**
 * Created by User on 24.04.2015.
 */
var http=require('http');
var fs = require('fs');
var top = require('./top');
var render = require('./render');
var handlingLoginPage = require('./handling-page-login');
var handlingLoginReg = require('./handling-page-registration');
var topBarVisibility = require('./topbar-login-visibility');
var copyrighted = require('./copyrights');
var server=http.createServer(function(request,response)
{
    var pathname = getPathname(request);
    response.write(topBarVisibility(pathname));
    switch (pathname) {
        case 'favicon.ico': return;
        case 'login':
        {
            handlingLoginPage(request, function (data) {
                data = copyrighted(data);
                response.end(data);
            });
            break;
        }
        case 'registration':
        {
            handlingLoginReg(request, function (data)
            {
                data = copyrighted(data);
                response.end(data);
            });
            break;
        }
        default :
        {
            fs.readFile('html/' + pathname + '.html', function read(err1, data) {
                response.write(topBarVisibility(pathname));
                if (err1) fs.readFile('html/errorpage.html', function (err, contest) {
                    response.end(contest);
                })
                else {
                    data = render(data, 'pagename', 'yoyoyo');
                    response.end(data);
                }
            })
        }
    }
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
