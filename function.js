"use strict";
function stringFunction() {
    var result = 'Hello I am a string';
    console.log(result);
    return result;
}
function addCal(val1, val2) {
    var total = val1 + val2;
    return total;
}
addCal(2, 2);
var universal;
universal = stringFunction;
//universal = cal;
//console.log(universal(2,3));
var universal_strict;
universal_strict = addCal;
console.log(universal_strict(2, 3));
