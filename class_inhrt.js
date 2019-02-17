"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Structure = /** @class */ (function () {
    function Structure() {
    }
    Structure.prototype.build = function () {
        console.log('Struct is built');
    };
    return Structure;
}());
var Building = /** @class */ (function (_super) {
    __extends(Building, _super);
    function Building() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Building.prototype.startLights = function () {
        console.log('lights is on');
    };
    return Building;
}(Structure));
var myBuilding = new Building;
myBuilding.build();
myBuilding.startLights();
