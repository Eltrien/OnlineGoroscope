/**
 * Created by User on 24.04.2015.
 */
var http=require('http');
var fs = require('fs');
var url = require('url');
var server=http.createServer(function(request,response)
{
    /*----------------------------------dinamich viborka stranic----------------------------------------*/
    /*----------------------------------zapuskat' vmeste s njinx----------------------------------------*/
    var pathname = url.parse(request.url).pathname;
    var newpathname = "";
    for (iq = 0; iq < pathname.length -1; iq++)
    {
        newpathname = newpathname + pathname[iq+1];
    }
    var ending = newpathname[(newpathname.length - 3)] + newpathname[(newpathname.length - 2)] + newpathname[(newpathname.length - 1)];
    fs.readFile(newpathname,function read(err1,data)
    {
        if(err1)
        {
            fs.readFile('errorpage.html', function(err,contest)
            {
                response.end(contest);
            })
        }
        else {
            fs.readFile(newpathname, function (err, contest) {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(contest);
            })
        }
    })
    /*----------------------------------dinamich viborka stranic----------------------------------------*/
})
server.listen(8000);
console.log('server started');

