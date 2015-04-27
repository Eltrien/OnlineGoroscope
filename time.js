/**
 * Created by User on 27.04.2015.
 */
//Copyright 2008 WWW.24WEBCLOCK.COM
// v1.2
// Javascript 1.3

//globals
var clock24_lang = new Array();
clock24_lang["en"] = ['en','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',
    'Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

var clock24_dst = new Array(
    /* 0  */ [ [0,7,3,0,7,10,60], [] ],	//CIS					  //Europe
    /* EU */ [ [0,7,3,0,7,10,60], ["AZ","AM","BY","MD","UA","AT","AL","AD","BE","BG","BA","VA","GB","HU","DE","GR","DK","IE","ES","IT","CY","LV","LT","LI","LU","MT","MK","MC","NL","NO","PL","PT","RO","SM","CS","SK","SI","TR","FI","FR","HR","CZ","CH","SE","EE"] ],
    /* US */ [ [2,7,3,1,7,11,60], ["US","CA"] ],
    /* MX */ [ [1,7,4,0,7,10,60], ["MX"] ],
    /* CU */ [ [3,7,3,0,7,10,60], ["CU"] ],
    /* IR */ [ [4,5,3,3,6,9,60],  ["IR"] ],
    /* IL */ [ [0,5,3,1,7,10,60], ["IL"] ],
    /* EG */ [ [0,5,4,0,4,8,60],  ["EG"] ],
//southern hemisphere
    /* AU */ [ [1,7,10,1,7,4,60], ["AU"] ],
    /* NZ */ [ [0,7,9,1,7,4,60],  ["NZ"] ],
    /* CL */ [ [2,7,10,0,7,3,60], ["CL"] ],
    /* BR */ [ [1,7,11,0,7,2,60], ["BR"] ]
);



function clock24(p,tz,fmt,lang)
{
    this.p = p;
    if(tz == 999) {
        var now = new Date();
        tz = -1 * now.getTimezoneOffset();
    }
    this.tz = tz;
    if(fmt=='') fmt = '%hh:%nn:%ss';
    this.fmt = fmt;
    this.refresh = clock24_refresh;
    this.format = clock24_format;
    this.daylight = clock24_daylight;
    this.dstdata = 0;
    this.dst1 = 0;
    this.dst2 = 0;
    this.dsttype = 0;
    this.lang = lang;

    this.clock24_m = new Array();
    this.clock24_m[1] = clock24_lang[lang][1]; this.clock24_m[2] = clock24_lang[lang][2];
    this.clock24_m[3] = clock24_lang[lang][3]; this.clock24_m[4] = clock24_lang[lang][4];
    this.clock24_m[5] = clock24_lang[lang][5]; this.clock24_m[6] = clock24_lang[lang][6];
    this.clock24_m[7] = clock24_lang[lang][7]; this.clock24_m[8] = clock24_lang[lang][8];
    this.clock24_m[9] = clock24_lang[lang][9]; this.clock24_m[10] = clock24_lang[lang][10];
    this.clock24_m[11] = clock24_lang[lang][11]; this.clock24_m[12] = clock24_lang[lang][12];

    this.clock24_w = new Array();
    this.clock24_w[0] = clock24_lang[lang][13]; this.clock24_w[1] = clock24_lang[lang][14];
    this.clock24_w[2] = clock24_lang[lang][15]; this.clock24_w[3] = clock24_lang[lang][16];
    this.clock24_w[4] = clock24_lang[lang][17]; this.clock24_w[5] = clock24_lang[lang][18];
    this.clock24_w[6] = clock24_lang[lang][19];

    window.setInterval("clock24.refresh()", 1000);
}

function clock24_refresh()
{
    var now = new Date();
    now = new Date( now.getTime() + this.tz * 60000);
    if(this.dst1 && this.dsttype) {
        if(now.getTime() > this.dst1 || now.getTime() < this.dst2)
            now = new Date( now.getTime() + this.dstdata*60000 );
    } else if(this.dst1) {
        if(now.getTime() > this.dst1 && now.getTime() < this.dst2)
            now = new Date( now.getTime() + this.dstdata*60000 );
    }

    document.getElementById('clock24_'+this.p).innerHTML = this.format(now, this.fmt);
}

function clock24_format(now, clock24_f)
{
    var d = now.getUTCDate(); var dd = d; if(d<10) dd = '0'+d;
    var m = now.getUTCMonth() + 1;	var mm = m; if(m<10) mm = '0'+m;
    var yyyy = now.getUTCFullYear(); var yy = yyyy - 2000; if(yy<10) yy = '0'+yy;

    var h = now.getUTCHours(); var hh = h; if(h<10) hh='0'+h;
    var H = h % 12; if(H==0) H = 12; var HH = H; if(H<10) HH='0'+H;
    var n = now.getUTCMinutes(); var nn = n; if(nn<10) nn='0'+n;
    var s = now.getUTCSeconds(); var ss = s; if(ss<10) ss='0'+s;

    var w = now.getUTCDay(); W = this.clock24_w[w];
    var M = this.clock24_m[m];

    var p = 'am'; if(h >= 12) p = 'pm'; var P = 'AM'; if(h >= 12) P = 'PM';

    var s = new String(clock24_f);
    s = s.replace( new RegExp("%dd"), dd);
    s = s.replace( new RegExp("%d"), d);
    s = s.replace( new RegExp("%mm"), mm);
    s = s.replace( new RegExp("%m"), m);
    s = s.replace( new RegExp("%yyyy"), yyyy);
    s = s.replace( new RegExp("%yy"), yy);
    s = s.replace( new RegExp("%hh"), hh);
    s = s.replace( new RegExp("%h"), h);
    s = s.replace( new RegExp("%nn"), nn);
    s = s.replace( new RegExp("%n"), n);
    s = s.replace( new RegExp("%ss"), ss);
    s = s.replace( new RegExp("%s"), s);
    s = s.replace( new RegExp("%HH"), HH);
    s = s.replace( new RegExp("%H"), H);

    s = s.replace( new RegExp("%W"), W);
    s = s.replace( new RegExp("%M"), M);

    s = s.replace( new RegExp("%p"), p);
    s = s.replace( new RegExp("%P"), P);

    return s.toString();
}

function clock24_daylight(c)
{
    c = clock24_find_dst(c);
    if(!c) {
        this.dst1 = 0; this.dst2 = 0;
        return;
    }
    dd = clock24_dst[c][0];
    d = clock24_byweekday(dd[0],dd[1],dd[2]-1);
    d.setUTCHours(2,0,0,0);
    this.dst1 = d.getTime();
    d = clock24_byweekday(dd[3],dd[4],dd[5]-1);
    d.setUTCHours(3,0,0,0);
    this.dst2 = d.getTime();
    if(this.dst1 > this.dst2) this.dsttype = 1;
    this.dstdata = dd[6];
}

function clock24_byweekday(pos,w,mon)
{
    // pos: 0-last weekday, 1-first weekday, 2-second...
    // w=[1..7],7-sun
    // mon=[0..11]
    var now = new Date();
    now.setUTCMonth(mon, 1);
    w1 = 1 + Math.abs(w - now.getUTCDay());
    now.setUTCDate(w1);	//first needed weekday in month
    wn = 0;
    if(pos) wn = (pos-1)*7 + w1;
    else {
        for(i=2; i<=6; i++) {
            td = new Date(  now.getTime() + 7*i*86400*1000 );
            if(td.getUTCMonth() > mon) {
                wn = w1 + 7*(i-1);
                break;
            }
        }
    }
    now.setUTCDate(wn);
    return now;
}

function clock24_find_dst(c)
{
    if(!c) return;
    for(var i=0; i<clock24_dst.length; i++)
    {
        for(var j=0; j<clock24_dst[i][1].length; j++)
        {
            if(clock24_dst[i][1][j] == c) return i;
        }
    }
}


var clock24 = new clock24('55767',180,'%yyyy/%mm/%dd %W %HH:%nn:%ss %P','en');
clock24.daylight('RU'); clock24.refresh();
