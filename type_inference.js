"use strict";
var car1 = {
    //properties of a car (attribute + method)
    brand: "Opel",
    engine: 1.4,
    run: function () {
        console.log("driving at 180 Km/h");
    }
};
//compiler error - ts assume that the brand property is string forever
//car.brand = 5;
