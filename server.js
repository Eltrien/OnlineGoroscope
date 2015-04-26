/**
 * Created by User on 24.04.2015.
 */
var http=require('http');
var fs = require('fs');
var url = require('url');
var fso = new ActiveXObject("Scripting.FileSystemObject");

var server=http.createServer(function(request,response)
{
    /*----------------------------------dinamich viborka stranic----------------------------------------*/
    var pathname = url.parse(request.url).pathname;
    var newpathname = "";
    for (iq = 0; iq < pathname.length -1; iq++)
    {
        newpathname = newpathname + pathname[iq+1];
    }
    console.log("newpathname = " + newpathname);
    if (newpathname == "favicon.ico") response.end();
    /*var homeDir = Titanium.Filesystem.getUserDirectory(); ne robit*/
    /*var mySampleFile = getFile(newpathname); ne robit*/

/*sdelat proverku na nalichie faila*/


    var ending = newpathname[(newpathname.length - 4)] + newpathname[(newpathname.length - 3)] + newpathname[(newpathname.length - 2)] + newpathname[(newpathname.length - 1)];
    console.log("ending = " + ending);
    if (ending == "html" && fso.FileExists(newpathname))
    {
        fs.readFile(newpathname, function(err,contest)
        {
            response.writeHead(200,{'Content-Type':'text/html'});
            response.end(contest);
        })
    }
    var ending = newpathname[(newpathname.length - 3)] + newpathname[(newpathname.length - 2)] + newpathname[(newpathname.length - 1)];
    console.log("ending = " + ending);
    if (ending == "css")
    {
        response.writeHead(200,{'Content-Type':'text/css'});
        fs.readFile('theme.css', function(err,contest)
        {
            response.end(contest);
        })
    }
    /*----------------------------------dinamich viborka stranic----------------------------------------*/
/*#RabotaetNoCherezRaz:(*/
    else/*na nepravilniy url vsegda gruzit errorpage, no inohda i na normalnie gruzit errorgage.. rabotaem!*/
    {
        fs.readFile('errorpage.html', function(err,contest)
        {
            response.end(contest);
        })
    }
/*#End RabotaetNoCherezRaz:(*/
})
server.listen(8000);
console.log('server started');
