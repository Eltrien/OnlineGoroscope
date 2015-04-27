/**
 * Created by User on 27.04.2015.
 */
//Copyright 2008 WWW.24WEBCLOCK.COM
// v1.2
// Javascript 1.3

function clock24(fmt)
{
    this.fmt = fmt;
    this.refresh = clock24_refresh;
    this.format = clock24_format;
    window.setInterval("clock24.refresh()", 1000);
}

function clock24_refresh()
{
    var now = new Date();
    now = new Date( now.getTime());
    document.getElementById('clock24').innerHTML = this.format(now, this.fmt);
}

function clock24_format(now, clock24_f)
{
    var d = now.getUTCDate(); var dd = d; if(d<10) dd = '0'+d;
    var m = now.getUTCMonth() + 1;	var mm = m; if(m<10) mm = '0'+m;
    var yyyy = now.getUTCFullYear(); var yy = yyyy - 2000; if(yy<10) yy = '0'+yy;
    var h = now.getHours(); var hh = h; if(h<10) hh='0'+h;
    var n = now.getUTCMinutes(); var nn = n; if(nn<10) nn='0'+n;
    var s = now.getUTCSeconds(); var ss = s; if(ss<10) ss='0'+s;
    var s = new String(clock24_f);
    s = s.replace( new RegExp("%dd"), dd);
    s = s.replace( new RegExp("%mm"), mm);
    s = s.replace( new RegExp("%yyyy"), yyyy);
    s = s.replace( new RegExp("%hh"), hh);
    s = s.replace( new RegExp("%nn"), nn);
    s = s.replace( new RegExp("%ss"), ss);

    return s.toString();
}

var clock24 = new clock24('%hh:%nn:%ss %dd/%mm/%yyyy');
clock24.refresh();
