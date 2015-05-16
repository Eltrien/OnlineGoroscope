/**
 * Created by User on 24.04.2015.
 */
var http=require('http');
var fs = require('fs');
var top = require('./top');
var auth = require('./auth');
var server=http.createServer(function(request,response)
{
    var pathname = getPathname(request);
    if (pathname == 'favicon.ico') return;
    if (pathname == 'login')
    {
        var body = '';
        var uname = '';
        var upass = '';
        if (request.method == 'POST')
        {
            request.on('data', function (chunk){body += chunk;});
            request.on('end', function ()
            {
                uname = body.split('&')[0];
                upass = body.split('&')[1];
            });
        }
        else
        {
            if (uname == '') uname = 'username=';
            if (upass == '') upass = 'password=';
        }
        fs.readFile('html/login.html',function read(err1,data) {
            if (uname == 'username=' && upass == 'password=') data = render(data, 'loginerror','');
            else if (loginCheck(uname,upass))
            {
                if (referers(request) == 'login' || referers(request) == '') pathname = 'index';
                else pathname = referers(request);
                fs.readFile('html/redirect.html', function read (err2,data2)
                {
                    data2 = render(data2,'redirect', pathname);
                    response.end(data2);
                })
                return;
            }
            else data = render(data, 'loginerror', '<p class="login-form-error">Sorry, we couldn\'t find that combination of username and password, please try again</p>');
            var topbar = top();
            topbar = render(topbar, 'display-account-listing', 'none');
            response.write(topbar);
            data = copyrighted(data);
            response.end(data);
            return;
        });
    }
    else{
    fs.readFile('html/' + pathname+'.html',function read(err1,data)
    {
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        /*response.writeHead(200, {'Content-Type': 'text/html'});*/
        var topbar = top();
        topbar = render(topbar, 'display-account-listing', 'inline-block');
        response.write(topbar);
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        if(err1) fs.readFile('html/errorpage.html', function(err,contest){response.end(contest);})
        else
        {
            data = copyrighted(data);
            data = render(data, 'pagename', 'yoyoyo');
            response.end(data);
        }
    })}
})
server.listen(8000);
console.log('server started');

function render(myhtml,template, param)
{
    myhtml = (myhtml+'').replace('${'+template+'}', param)
    return myhtml
}
function copyrighted(myhtml)
{
    var copyrights = 'Copyrights &copy 2015 Eltrien corp. All rights reserved. Onlinegoroscope and Eltrien are trademarks, service marks, and registered trademarks of Eltrien corp.';
    myhtml = (myhtml+'').replace('${copyrights}', copyrights)
    return myhtml
}
function loginCheck(uname,upass)
{
    var name = 'qwerty';
    var pass = 'qwertyy'
    if (uname == 'username='+name && upass == 'password='+pass) return true;
    return false;
}
function getPathname(request)
{
    var pathname = request.url;
    var newpathname = pathname.substr(1);
    if (newpathname == "") newpathname = "index";
    return newpathname;
}
function referers (request)
{
    var ref = '';
    for (i = 17; i < request.headers.referer.length; i++)
    {
        ref += request.headers.referer[i];
    }
    return ref;
}