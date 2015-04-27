/**
 * Created by User on 24.04.2015.
 */
var http=require('http');
var fs = require('fs');
var url = require('url');
//var fso = new ActiveXObject("Scripting.FileSystemObject");

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
    var ending = newpathname[(newpathname.length - 3)] + newpathname[(newpathname.length - 2)] + newpathname[(newpathname.length - 1)];
    console.log("ending1 = " + ending);
    if (ending == "ico") response.end();
/*sdelat proverku na nalichie faila*/
    fs.readFile(newpathname,function read(err1,data)
    {
        if(err1)/*teper ne gruzit erreopage, no inohda i na normalnie gruzit errorgage.. rabotaem! nado sdelat' proverku na nalichie faila!!!*/
        {
            fs.readFile('errorpage.html', function(err,contest)
            {
                response.end(contest);
            })
        }
        else {
            var ending = newpathname[(newpathname.length - 4)] + newpathname[(newpathname.length - 3)] + newpathname[(newpathname.length - 2)] + newpathname[(newpathname.length - 1)];
            console.log("ending2 = " + ending);
            if (ending == "html") {
                fs.readFile(newpathname, function (err, contest) {
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(contest);
                })
            }
            var ending = newpathname[(newpathname.length - 3)] + newpathname[(newpathname.length - 2)] + newpathname[(newpathname.length - 1)];
            console.log("ending3 = " + ending);
            if (ending == "css") {
                response.writeHead(200, {'Content-Type': 'text/css'});
                fs.readFile('theme.css', function (err, contest) {
                    response.end(contest);
                })
            }
        }
    })


    /*----------------------------------dinamich viborka stranic----------------------------------------*/
/*#RabotaetNoCherezRaz:(*/

/*#End RabotaetNoCherezRaz:(*/
})
server.listen(8000);
console.log('server started');
