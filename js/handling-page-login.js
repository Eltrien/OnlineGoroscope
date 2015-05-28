/**
 * Created by User on 17.05.2015.
 */
var render = require('./render');
var fs = require('fs');
var top = require('./bar-top');
var interactionMysql = require('./interaction-mysql');
var referers = require('./referers');
var interactionCookie = require('./interaction-cookie');
var handlingPageLogin = function (request, udata, callback)
{
    var body = '';
    var uname = '';
    var upass = '';
    var uhash = '';
    if (request.method == 'POST')
    {
        if (udata != false)
        {
            uname = udata.split('&')[0];
            //uID = udata.split('&')[2];
            //uhash = udata.split('&')[3];
            interactionMysql.accHash(uname,"0",function()
            {
                var pathname;
                if (referers(request) == 'login' || referers(request) == '') pathname = 'index';
                else pathname = referers(request);
                data = fs.readFileSync('html/redirect.html', 'utf8');
                callback(render(data, 'redirect', pathname), 0);
            });
        }
        else
        {
            request.on('data', function (chunk) {body += chunk;});
            request.on('end', function () {
                uname = body.split('&')[0].split('=')[1];
                upass = body.split('&')[1].split('=')[1];
                var data;
                console.log(interactionCookie.creCookie());
                interactionMysql.accLogin(uname, upass, interactionCookie.creCookie(), function (exh, uhash) {
                    if (exh)
                    {
                        var pathname;
                        if (referers(request) == 'login' || referers(request) == '') pathname = 'index';
                        else pathname = referers(request);
                        data = fs.readFileSync('html/redirect.html', 'utf8');
                        callback(render(data, 'redirect', pathname), uhash);
                    }
                    else {
                        data = fs.readFileSync('html/login.html', 'utf8');
                        if (uname == '' && upass == '')callback(render(data, 'loginerror', ''));
                        else callback(render(data, 'loginerror', '<p class="login-form-error">Sorry, we couldn\'t find that combination of username and password, please try again</p>'));
                    }
                });
            });
        }
    }
    else
    {
        var data = fs.readFileSync('html/login.html','utf8');
        callback(render(data, 'loginerror',''));
    }
};
module.exports = handlingPageLogin;