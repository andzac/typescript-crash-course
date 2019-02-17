abstract class Structure {
    build(){
        console.log('Struct is built');
    }
}



class Building extends Structure {
    startLights(){
        console.log('lights is on');
    }
}

let myBuilding = new Building;
myBuilding.build();
myBuilding.startLights();