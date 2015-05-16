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
    console.log(request);
    if (pathname == 'login' && request.method == 'POST')
    {
        var body = "";
        request.on('data', function (chunk){body += chunk;});
        request.on('end', function ()
        {
            var uname = body.split('&')[0];
            var upass = body.split('&')[1];
            fs.readFile('html/login.html',function read(err1,data) {
                response.write(top());
                data = copyrighted(data);
                if (uname == 'username=' && upass == 'password=') data = render(data, 'loginerror','');
                else if (loginCheck(uname,upass))
                {
                    data = render(data, 'loginerror','');
                }
                else data = render(data, 'loginerror', '<p class="login-form-error">error</p>')
                response.end(data);
                return;
            });
        });
    }
    else{
    fs.readFile('html/' + pathname+'.html',function read(err1,data)
    {
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        /*response.writeHead(200, {'Content-Type': 'text/html'});*/
        response.write(top());
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        if(err1) fs.readFile('html/errorpage.html', function(err,contest){response.end(contest);})
        else
        {
            data = copyrighted(data);
            data = render(data, 'loginerror', 'error')
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
    var copyrights = ' 2015 Eltrien corp. All rights reserved. Onlinegoroscope and Eltrien are trademarks, service marks, and registered trademarks of Eltrien corp.';
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