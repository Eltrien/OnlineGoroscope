/**
 * Created by User on 24.04.2015.
 */
src="time.js"
var http=require('http');
var fs = require('fs');
var url = require('url');
//var express = require('express');
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
        //var file = new Parse.FILE("");

        if(err1)
        {
            fs.readFile('errorpage.html', function(err,contest)
            {
                response.end(contest);
            })
        }
        else
        {
            var file = fs.readFile(newpathname, function (err, contest) {
                console.log(file);
                response.writeHead(200, {'Content-Type': 'text/html'});
                //response.replace(, "qwerty")
                //response.end(contest);
                var now = new Date();
                var d = now.getUTCDate(); var dd = d; if(d<10) dd = '0'+d;
                var m = now.getUTCMonth() + 1;	var mm = m; if(m<10) mm = '0'+m;
                var yyyy = now.getUTCFullYear(); var yy = yyyy - 2000; if(yy<10) yy = '0'+yy;
                var h = now.getHours(); var hh = h; if(h<10) hh='0'+h;
                var n = now.getUTCMinutes(); var nn = n; if(nn<10) nn='0'+n;
                var s = now.getUTCSeconds(); var ss = s; if(ss<10) ss='0'+s;
                var s = new String('%hh:%nn <br> %dd/%mm/%yyyy');
                s = s.replace( new RegExp("%dd"), dd);
                s = s.replace( new RegExp("%mm"), mm);
                s = s.replace( new RegExp("%yyyy"), yyyy);
                s = s.replace( new RegExp("%hh"), hh);
                s = s.replace( new RegExp("%nn"), nn);
                s = s.replace( new RegExp("%ss"), ss);
                var string = '<div id=\"time\">'+
                    '<table' + /*' border=\"0\" bgcolor=\"#cfba6b\" cellspacing=1 cellpadding=3 class=\"clock24st\" style=\"line-height:25px; padding:0; height: 100px;\"' + */'>'+
                    '<tr>'+
                    '<td' + /*' bgcolor=\"#050020\" class=\"clock24std\"' + */'>'+
                    '<span ' + /*'class=\"clock24\" id=\"clock24\" style=\"color:#cfba6b;\"' + */'>'+s+'</span></td></tr>'+
                    '</table>'+
                    '</div>';
                response.write(string.toString());
                response.end(contest);
            })

        }
    })
    /*----------------------------------dinamich viborka stranic----------------------------------------*/
})
server.listen(8000);
console.log('server started');
