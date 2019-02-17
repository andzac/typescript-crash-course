let vehicle: {brand:string, engineType:number} = {
    brand: "Opel",
    engineType: 1.4
}

vehicle.brand = "Tesla";

let new_vehicle: [string, number] = ['Opel',1.4];
console.log(new_vehicle[0] + ' - ' + new_vehicle[1]);

let unionType: number | string;

unionType = "String";
unionType = 354;
//error
//unionType = false;