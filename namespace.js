"use strict";
var myOldNamespace;
(function (myOldNamespace) {
    myOldNamespace.textNS = 'I am inside a ts NS';
    //I need to export the function to use it outside the namespace..
    function displayDataNS() {
        return myOldNamespace.textNS;
    }
    myOldNamespace.displayDataNS = displayDataNS;
})(myOldNamespace || (myOldNamespace = {}));
console.log(myOldNamespace.displayDataNS());
