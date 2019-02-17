function stringFunction(): string {
    let result: string  = 'Hello I am a string';
    console.log(result);
    return result;
}

function addCal(val1:number, val2:number) : number{
    let total: number = val1 + val2;
    return total;
}

addCal(2,2);

let universal: () => string;
universal = stringFunction;

//universal = cal;
//console.log(universal(2,3));

let universal_strict: (value1:number, value2:number) => number;
universal_strict = addCal;
console.log(universal_strict(2,3));