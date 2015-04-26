/**
 * Created by User on 24.04.2015.
 */
//var tag_css = document.createElement('link');
//tag_css.rel = 'stylesheet';
//tag_css.href = 'theme.css'; // здесь указывается URL стилевого файла
//tag_css.type = 'text/css';
//var tag_head = document.getElementsByTagName('head');
//tag_head[0].appendChild(tag_css);
var http=require('http');
var fs = require('fs');
var url = require('url');

var server=http.createServer(function(request,response)
{
    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;
    //response.write("<link rel='stylesheet' href='css/style_js.css' type='text/css'>");
    response.writeHead(200,{'Content-Type':'text/html'});
    //var qwerty = url.format(request.parse(href));
/*#РаботаетНеОч*/
    var pathname = url.parse(request.url).pathname;
    console.log(pathname);
    if (pathname == "/index.html")
    {
        fs.readFile('index.html', function(err,contest)
        {
            response.end(contest)
        })
    }
    if (pathname == "/forecast.html")
    {
        fs.readFile('forecast.html', function(err,contest)
        {
            response.end(contest)
        })
    }
/*#End РаботаетНеОч*/
    //console.log(query);


})
server.listen(8000);
console.log('server started');