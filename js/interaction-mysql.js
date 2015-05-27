/**
 * Created by User on 18.05.2015.
 */
var mysql = require('mysql');
var interactionCookie = require('./interaction-cookie');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database: 'mydb'
});
connection.connect(function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('connected');
    }
});
module.exports = interactionMysql;
function interactionMysql()
{
    return;
}
interactionMysql.accExist = function accExist(ulogin,callback)
{
    connection.query("SELECT COUNT(uID) FROM uAccounts WHERE uLogin=?", [ulogin], function (err, res) {
        /*console.log(query.sql);
         console.log("uname = " + uname);
         console.log("res = " + res[0]['uName']);*/
        //console.log(res[0]['uName']);
        //console.log('res = '+res);
        if (res[0]['COUNT(uID)'] == '0' || err) callback(false);
        else callback(true);
    });
};

interactionMysql.accLogin = function accLogin(ulogin,upass,callback)
{
    connection.query("SELECT COUNT(uID) FROM uAccounts WHERE uLogin=? AND uPass=?", [ulogin, upass], function (err, res) {
        if (res[0]['COUNT(uID)'] == '0' || err) callback(false);
        else
        {   interactionMysql.accHash(ulogin,125,function(q) {
                console.log(q);
                callback(true);
            });
        }
    });
};

interactionMysql.accHash = function accHash(ulogin,uhash,callback)
{
    connection.query("UPDATE uAccounts SET uHash=? WHERE uLogin=?",[uhash, ulogin],function(err, res){

        if (err) {
            console.error(err);
            callback(false);
        }
        else callback(true);
    });
};

interactionMysql.accReg = function accReg(ulogin, upass, udate, callback)
{
    connection.query("INSERT INTO uAccounts(uLogin,uPass,uDate,uHash) VALUES('"+ulogin+"','"+upass+"','"+udate+"','0')");
    //interactionCookie(uname,udate);
    interactionMysql.accHash(ulogin,125,function(){callback(true);});
};

interactionMysql.accGetData = function accGetData(cuID,cuHash,callback)
{
    connection.query("SELECT * FROM uAccounts WHERE uID=? AND uHash=?",[cuID,cuHash],function(err, res)
    {
        if (err)
        {
            console.error(err);
        }
        else callback(res[0]['uLogin'] +"&"+ res[0]['uDate']);
    });
};
interactionMysql.accLogined = function accLogined(uHash, callback)
{
    connection.query("SELECT uID FROM uAccounts WHERE uHash=?",[uHash],function(err, res)
    {
        if (err || res == '') callback(false);
        else callback(res[0]['uID']);
    });
};
/*connection.end(function(err)
{
    if(err) console.error('Error On DB Close.');
    else console.log('DB Closed');
});*/