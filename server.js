/**
 * Created by User on 24.04.2015.
 */
var http=require('http');
var fs = require('fs');
var url = require('url');


var server=http.createServer(function(request,response)
{
/*#VoTakLuchsheNoPokaTupo*/
    var pathname = url.parse(request.url).pathname;
    console.log(pathname);
    /*--------------------------ot peremeni mest if izmenaetsa pravilnost raboti-------------------------------------*/
    if (pathname == "/favicon.ico") response.end();
    if (pathname == "/index.html")
    {
        fs.readFile('index.html', function(err,contest)
        {
            response.writeHead(200,{'Content-Type':'text/html'});
            response.end(contest);
        })
    }
    if (pathname == "/forecast.html")
    {
        fs.readFile('forecast.html', function(err,contest)
        {
            response.end(contest);
        })
    }
/*#UHTIJO*/
    if (pathname == "/theme.css")/*vrode bi rabotaet, nuzhno bolshe testov*/
    {
        response.writeHead(200,{'Content-Type':'text/css'});
        fs.readFile('theme.css', function(err,contest)
        {
            response.end(contest);
        })

    }
/*#End UHTIJO*/
/*#RabotaetNoCherezRaz:(*/
    else/*na nepravilniy url vsegda gruzit errorpage, no inohda i na normalnie gruzit errorgage.. rabotaem!*/
    {
        fs.readFile('errorpage.html', function(err,contest)
        {
            response.end(contest);
        })
    }
/*#End RabotaetNoCherezRaz:(*/
/*#End VoTakLuchsheNoPokaTupo*/
})
server.listen(8000);
console.log('server started');