/**
 * Created by User on 18.05.2015.
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'qwerty007'
});

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
    }
};
module.exports = interactionMysql;