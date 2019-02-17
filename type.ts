let car: string;
let engine: number;
let isFast: boolean;
let note: any;

car = "Opel";
engine = 1.4;
isFast = false;
note = 3;
note = "I changed my mind..";

let cars: any = ['Opel', 'Mercedes', 'BMW', 'Toyota'];
cars = 'Nissan';

let cars_arr: any[] = ['Opel', 'Mercedes', 'BMW', 'Toyota'];
cars_arr = ['Nissan'];

function cal(val1:number, val2:number) : number{
    let total: number = val1 + val2;
    return total;
}

let tot:number = cal(2,2);
console.log(tot);