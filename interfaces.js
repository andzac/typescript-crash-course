"use strict";
var mycar = {
    brand: "Opel",
    speed: 180,
    speedMethod: function () {
        console.log("Car " + this.brand + " is going at " + this.speed + " Km/h");
    }
};
function myCarFunction(mycar) {
    mycar.speed = 150;
    console.log("Car " + mycar.brand + " is going at " + mycar.speed + " Km/h");
}
//myCarFunction(mycar)
var AutomobileClass = /** @class */ (function () {
    function AutomobileClass(brand) {
        this.brand = brand;
        this.speed = 0;
    }
    AutomobileClass.prototype.speedMethod = function (speed) {
        console.log("Hi my car is going at " + speed);
    };
    return AutomobileClass;
}());
var carObject = new AutomobileClass("Volvo");
carObject.speedMethod(1000);
