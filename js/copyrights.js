/**
 * Created by User on 17.05.2015.
 */
var copyrighted = function(myhtml)
{
    var copyrights = 'Copyrights &copy 2015 Eltrien corp. All rights reserved. Onlinegoroscope and Eltrien are trademarks, service marks, and registered trademarks of Eltrien corp.';
    myhtml = (myhtml+'').replace('${copyrights}', copyrights);
    return myhtml;
}
module.exports = copyrighted;