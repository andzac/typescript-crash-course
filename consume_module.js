var myNamespace;
(function (myNamespace) {
    myNamespace.text = 'I am inside a ts namespace';
    //I need to export the function to use it outside the namespace..
    function displayData() {
        return myNamespace.text;
    }
    myNamespace.displayData = displayData;
})(myNamespace || (myNamespace = {}));
///<reference path="moduleOne.ts"/>
console.log(myNamespace.displayData());
//console.log(myNamespace.displayDataNS());
