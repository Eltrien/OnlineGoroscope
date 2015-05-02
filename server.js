/**
 * Created by User on 24.04.2015.
 */
var http=require('http');
var fs = require('fs');
var url = require('url');
var clock = require('./time');
/*var mysql = require('mysql');
var host='127.0.0.1';
var port= '3306';
var client = mysql.createClient(port,host);
client.user='root';
client.password='qwerty007';
client.database='node';

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'qwerty007'
});

connection.connect();
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows[0].solution);
});
connection.end();
*/
var server=http.createServer(function(request,response)
{
    var pathname = url.parse(request.url).pathname;
    var newpathname = "";
    for (iq = 0; iq < pathname.length -1; iq++)
    {
        newpathname = newpathname + pathname[iq+1];
    }
    fs.readFile(newpathname,function read(err1,data)
    {
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        response.writeHead(200, {'Content-Type': 'text/html'});
        var string = '<div id=\"top\"><ul><li><a href=\"index.html\"><img src=\"pictures/mainicon.jpg\" class=\"top-icon\"></a></li><li><a href=\"forecast.html\" class=\"top-links\">forecasts</a></li></ul></div>'
        response.write(string.toString());
        var s = clock();
        string = '<div id=\"time\"><table><tr><td><span>'+s+'</span></td></tr></table></div>';
        response.write(string.toString());
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        if (newpathname=="")
        {
            fs.readFile('index.html', function(err,contest)
            {
                response.end(contest);
            })
        }
        if(err1)
        {
            fs.readFile('errorpage.html', function(err,contest)
            {
                response.end(contest);
            })
        }
        else
        {
            response.end(data);
        }
    })
})
server.listen(8000);
console.log('server started');



