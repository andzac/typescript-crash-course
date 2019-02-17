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
