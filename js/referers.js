/**
 * Created by User on 18.05.2015.
 */
var referers = function(request)
{
    var ref = '';
    for (i = 17; i < request.headers.referer.length; i++)
    {
        ref += request.headers.referer[i];
    }
    return ref;
};
module.exports = referers;