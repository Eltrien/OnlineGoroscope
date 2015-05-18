/**
 * Created by User on 18.05.2015.
 */
var mysql = require('mysql');
var interactionCookie = require('./interaction-cookie');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '1234',
    database: 'imdb'
});
connection.connect(function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('connected');
    }
});
connection.end(function(err) { if(err) console.error('Error On DB Close.'); });
var interactionMysql = function (uname, upass, udate)
{
    var dbname;
    var dbpass;
    if(arguments.length==1)
    {
        dbname = 'qwer';
        return (uname == dbname);
    }
    else if(arguments.length==2)
    {
        dbname = 'qwer';
        dbpass = 'qwerty';
        return (uname == dbname && upass == dbpass);
    }
    else if(arguments.length==3)
    {
        console.log('uname = ' + uname);
        console.log('upass = ' + upass);
        console.log('udate = ' + udate);
        interactionCookie(uname,udate);
    }
};
module.exports = interactionMysql;