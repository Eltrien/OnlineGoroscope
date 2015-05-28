/**
 * Created by User on 18.05.2015.
 */
var forecasts = require('./forecasts');
var forecast = function(pathname,udata)
{
    var string;
    if (pathname == 'login' || pathname == 'registration' || pathname == 'errorpage' || udata ==false) return string = '';
    else
    {
        var month = udata.split('&')[1].split(' ')[1];
        var day = udata.split('&')[1].split(' ')[2];
        string = '' +
        '<div id="forecast">' +
            '<h1>Your forecast</h1>' +
            '<hr>' +
            '<p>' + forecasts('', urforecast(month,day)) + '</p>' +
            '<hr>' +
        '</div>';

    }
    return string;
};
module.exports = forecast;
function urforecast (month,day)
{
    var mon;
    if (month == 'Jan') mon = 1;
    else if (month == 'Feb') mon = 2;
    else if (month == 'Mar') mon = 3;
    else if (month == 'Apr') mon = 4;
    else if (month == 'May') mon = 5;
    else if (month == 'Jun') mon = 6;
    else if (month == 'Jul') mon = 7;
    else if (month == 'Aug') mon = 8;
    else if (month == 'Sep') mon = 9;
    else if (month == 'Oct') mon = 10;
    else if (month == 'Nov') mon = 11;
    else if (month == 'Dec') mon = 12;
    else return '';
    if ((mon == 1 && day >= 21) || (mon == 2 && day <= 20)) return 'Vodoley';
    else if ((mon == 2 && day >= 21) || (mon == 3 && day <= 20)) return 'Ribi';
    else if ((mon == 3 && day >= 21) || (mon == 4 && day <= 20)) return 'Oven';
    else if ((mon == 4 && day >= 21) || (mon == 5 && day <= 20)) return 'Telec';
    else if ((mon == 5 && day >= 21) || (mon == 6 && day <= 21)) return 'Blizneci';
    else if ((mon == 6 && day >= 22) || (mon == 7 && day <= 22)) return 'Rak';
    else if ((mon == 7 && day >= 23) || (mon == 8 && day <= 23)) return 'Lev';
    else if ((mon == 8 && day >= 24) || (mon == 9 && day <= 23)) return 'Deva';
    else if ((mon == 9 && day >= 24) || (mon == 10 && day <= 23)) return 'Vesi';
    else if ((mon == 10 && day >= 24) || (mon == 11 && day <= 22)) return 'Skorpion';
    else if ((mon == 11 && day >= 23) || (mon == 12 && day <= 21)) return 'Strelec';
    else if ((mon == 12 && day >= 22) || (mon == 1 && day <= 20)) return 'Kozerog';
    else return '';
}
