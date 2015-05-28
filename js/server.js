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
var forecasts = require('./forecasts');

var server=http.createServer(function(request,response)
{
    var cookies = parseCookies(request);
    //console.log(cookies);
    //var uHash2 = 0, uID2 = 0;
    //console.log(interactionCookie.createCookie());
//    console.log(creCookie());
    interactionCookie.getData(cookies, function(udata) {
        var uHashBack;
        if (udata != false)uHashBack = udata.split('&')[3];
        else uHashBack = 0;
        var pathname = getPathname(request);
        switch (pathname) {
            case 'favicon.ico':
                return;
            case 'login':
            {
                handlingLoginPage(request, udata, function (data, uHash) {
                    response.writeHead(200, {
                        'Set-Cookie': 'cookieuHash='+ uHash,
                        'Content-Type': "text/html; charset=utf-8"});
                    response.write(top(pathname, udata) + forecast(pathname, udata));
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
                handlingLoginReg(request, function (data, uHash) {
                    response.writeHead(200, {
                        'Set-Cookie': 'cookieuHash='+ uHash,
                        'Content-Type': "text/html; charset=utf-8"});
                    response.write(top(pathname, udata) + forecast(pathname, udata));
                    data = copyrighted(data);
                    response.end(data);
                });
                break;
            }
            default :
            {

                /*response.writeHead(200, {
                    'Set-Cookie': 'mycookie=test',
                    'Content-Type': 'text/plain'
                });*/
                //console.log(response);
                response.writeHead(200, {
                    'Set-Cookie': 'cookieuHash='+uHashBack,
                    "Content-Type": "text/html; charset=utf-8"});
                response.write(top(pathname, udata) + forecast(pathname, udata));
                fs.readFile('html/' + pathname + '.html', function read(err1, data) {
                    if (err1) fs.readFile('html/errorpage.html', function (err, contest) {
                        response.end(contest);
                    });
                    else {
                        data = copyrighted(data);
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

function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;
    rc && rc.split(';').forEach(function( cookie ) {
        //console.log(JSON.stringify(cookie) + '//\n');
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });
    return list;
}