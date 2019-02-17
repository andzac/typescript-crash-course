interface CarInterface {
    brand: string;
    speed: number;
    speedMethod(velocity:number):void;
}

const mycar: CarInterface = {
    brand: "Opel",
    speed: 180,
    speedMethod() {
        console.log(`Car ${this.brand} is going at ${this.speed} Km/h`)
    }
};

function myCarFunction(mycar: CarInterface) {
    mycar.speed = 150;

    console.log(`Car ${mycar.brand} is going at ${mycar.speed} Km/h`)
}

//myCarFunction(mycar)
class AutomobileClass implements CarInterface{
    brand: string;
    speed: number;

    constructor(brand:string){
        this.brand = brand;
        this.speed = 0;
    }
    speedMethod(speed:number){
        console.log(`Hi my car is going at ${speed}`)
    }
}

let carObject = new AutomobileClass("Volvo");
carObject.speedMethod(1000);