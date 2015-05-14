/**
 * Created by User on 24.04.2015.
 */
var http=require('http');
var fs = require('fs');
var url = require('url');
var clock = require('./time');
var top = require('./top')
var express = require('express');
var jade = require('jade');
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
    for (iq = 1; iq < pathname.length; iq++) newpathname += pathname[iq];
    if (newpathname == "") newpathname = "index";
    fs.readFile(newpathname+'.html',function read(err1,data)
    {
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        response.writeHead(200, {'Content-Type': 'text/html'});
        var string = top(); /*top bar*/
        string += clock(); /*time*/
        response.write(string);
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        if(err1) fs.readFile('errorpage.html', function(err,contest){response.end(contest);})
        else response.end(data);
    })
})
server.listen(8000);
console.log('server started');



