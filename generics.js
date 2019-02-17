"use strict";
function displayStringData(someDataString) {
    return someDataString;
}
function displayNumberData(someDataString) {
    return someDataString;
}
function displayBooleanData(someDataString) {
    return someDataString;
}
//console.log(displayStringData("Hello I am a string"));
//console.log(displayNumberData(22));
//console.log(displayBooleanData(true));
/*
INSTEAD OF HAVE MULTIPLE IMPLEMENTATION
FOR THE SAME METHOD I CAN USE GENERICS..
*/
function displayData(somedata) {
    return somedata;
}
console.log(displayData(333232322));
console.log(displayData('Helloo'));
var ObjectGeneric = /** @class */ (function () {
    function ObjectGeneric(itsValue) {
        this.itsValue = itsValue;
    }
    return ObjectGeneric;
}());
var myObjectGeneric1 = new ObjectGeneric("STRING");
var myObjectGeneric2 = new ObjectGeneric(22);
//we can also be restrictive about accepted type
var myObjectGeneric3 = new ObjectGeneric("ANOTHER STRING");
