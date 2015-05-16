/**
 * Created by User on 24.04.2015.
 */
var http=require('http');
var fs = require('fs');
var url = require('url');
var top = require('./top');
var auth = require('./auth');
var server=http.createServer(function(request,response)
{

    var pathname = request.url;
    if (pathname == '/favicon.ico') return;
    var newpathname = "";
    for (iq = 1; iq < pathname.length; iq++) newpathname += pathname[iq];
    if (newpathname == "") newpathname = "index";

    if (newpathname == 'login' && request.method == 'POST')
    {
        var body = "";
        request.on('data', function (chunk){body += chunk;});
        request.on('end', function ()
        {
            var uname = body.split('&')[0];
            var upass = body.split('&')[1];
            console.log('qwerqwregqwer  '+auth(uname,upass));
        });
    }
    fs.readFile('html/' + newpathname+'.html',function read(err1,data)
    {
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        response.writeHead(200, {'Content-Type': 'text/html'});
        var string = top(); /*top bar*/
        console.log(pathname);
        response.write(string);
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        if(err1) fs.readFile('html/errorpage.html', function(err,contest){response.end(contest);})
        else
        {
            data = render(data, '${pagename}', 'yoyoyo')
            response.end(data);
        }
    })
})
server.listen(8000);
console.log('server started');

function render(myhtml,template, param)
{
    myhtml = (myhtml+'').replace(template, param)
    return myhtml
}