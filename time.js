var myClock = function()
{
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
    return '<div id=\"time\">'+s+'</div>';
};
module.exports = myClock;