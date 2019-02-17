function displayStringData(someDataString:string){
    return someDataString;
}

function displayNumberData(someDataString:number){
    return someDataString;
}

function displayBooleanData(someDataString:boolean){
    return someDataString;
}


//console.log(displayStringData("Hello I am a string"));
//console.log(displayNumberData(22));
//console.log(displayBooleanData(true));

/*
INSTEAD OF HAVE MULTIPLE IMPLEMENTATION
FOR THE SAME METHOD I CAN USE GENERICS..
*/

function displayData<TYPE>(somedata: TYPE){
    return somedata;
}

console.log(displayData(333232322));
console.log(displayData('Helloo'));

class ObjectGeneric<TYPE1>{
    constructor(private itsValue: TYPE1){

    }
}

class ObjectGenericWithConstrain<TYPE1 extends string>{
    constructor(private itsValue: TYPE1){

    }
}


let myObjectGeneric1 = new ObjectGeneric("STRING");
let myObjectGeneric2 = new ObjectGeneric(22);

//we can also be restrictive about accepted type
let myObjectGeneric3 = new ObjectGeneric<string>("ANOTHER STRING");

//with a constrain in the constructor I cannot assign whatever I want as parameter..
//let myObjectGeneric4 = new ObjectGenericWithConstrain(10); //wrong
let myObjectGeneric4 = new ObjectGenericWithConstrain("OKK"); 