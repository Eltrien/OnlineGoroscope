/**
 * Created by User on 24.04.2015.
 */
var http=require('http');
var fs = require('fs');
var server=http.createServer(function(request,response)
{
    response.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile('index.html', function(err,contest)
    {
        response.end(contest)
    })
})
server.listen(8000);
console.log('server started');