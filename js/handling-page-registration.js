/**
 * Created by User on 18.05.2015.
 */
/**
 * Created by User on 17.05.2015.
 */
var render = require('./render');
var fs = require('fs');
var top = require('./bar-top');
var interactionMysql = require('./interaction-mysql');
var handlingPageRegistration = function (request, callback)
{
    var body = '';
    var uname = '';
    var upass = '';
    var upassrep = '';
    var day = '';
    var month = '';
    var year = '';
    var date = '';
    if (request.method == 'POST')
    {
        request.on('data', function (chunk){body += chunk;});
        request.on('end', function ()
        {
            uname = body.split('&')[0].split('=')[1];
            upass = body.split('&')[1].split('=')[1];
            upassrep = body.split('&')[2].split('=')[1];
            day = body.split('&')[3].split('=')[1];
            month = body.split('&')[4].split('=')[1];
            year = body.split('&')[5].split('=')[1];
            date = year + '-' + month + '-' + day;
            var data;
            if (uname.length < 4 || uname.length >16)
            {
                data = fs.readFileSync('html/registration.html','utf8');
                callback(render(data, 'regerror', '<p class="reg-form-error">Username must be between 4 and 16 charachters long</p>'));
            }
            else
            {
                interactionMysql.accExist(uname,function(exist)
                {
                    if (exist)
                    {
                        data = fs.readFileSync('html/registration.html','utf8');
                        callback(render(data, 'regerror', '<p class="reg-form-error">Sorry, this username is already registrated</p>'));
                    }
                    else if (upass.length < 6 || upass.length >16)
                    {
                        data = fs.readFileSync('html/registration.html','utf8');
                        callback(render(data, 'regerror', '<p class="reg-form-error">Passwords must be between 6 and 16 charachters long</p>'));
                    }
                    else if (upass != upassrep)
                    {
                        data = fs.readFileSync('html/registration.html','utf8');
                        callback(render(data, 'regerror', '<p class="reg-form-error">Passwords must match</p>'));
                    }
                    else if (new Date(date) == 'Invalid Date')
                    {
                        data = fs.readFileSync('html/registration.html','utf8');
                        callback(render(data, 'regerror', '<p class="reg-form-error">Enter your real birth day</p>'));
                    }
                    else if (year < 1900)
                    {
                        data = fs.readFileSync('html/registration.html','utf8');
                        callback(render(data, 'regerror', '<p class="reg-form-error">Attention! Vampires prohibited registration!</p>'));
                    }
                    else if (year >= 2016)
                    {
                        data = fs.readFileSync('html/registration.html','utf8');
                        callback(render(data, 'regerror', '<p class="reg-form-error">Are u from the future?</p>'));
                    }
                    else
                    {
                        interactionMysql.accReg(uname,upass,date,function (){
                            data = fs.readFileSync('html/redirect.html','utf8');
                            callback(render(data,'redirect', 'index'));
                        });

                    }
                })
            }
        });
    }
    else
    {
        var data = fs.readFileSync('html/registration.html','utf8');
        callback(render(data, 'regerror',''));
    }
};
module.exports = handlingPageRegistration;