var Building = /** @class */ (function () {
    function Building() {
    }
    Building.prototype.escalator = function () {
        console.log('escalator is moving');
    };
    return Building;
}());
var myBuilding = new Building;
myBuilding.escalator();
