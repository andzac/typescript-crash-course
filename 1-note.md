Typescript is a superset of javascript
- is a wrapper with more features

#How it works
- there is a file.ts
- compiler convert ts code in js

# Some features of Typescript
- Types
- Interfaces
- Decorators
- '+' all the ES6 functionality like
    - classes
    - arrow functions
    - modules
    - block scoped variables

# Types
We tell to typescript what kind of data it should expect from a variable

- number
- string[] or number[]
- string
- boolean (true or false)
- any

## Types inference
Capability of typescript code to guess the type of a variable and display syntax error when user try to assign a differnt kind of type

```javascript
let name = "Opel" // is assumed that name is a string
```

## Difference between let and var
-   **var** is a function scoped and is defined throughtout the program
-   **let** is a block scoped 

### Example

```javascript
// calling var z before definition will return undefined 
console.log(z)
var z = 2; 

// calling let a before definition will give error 
console.log(a)
let a = 3; 
```

# Arrays
Both definition are the same:

```javascript
let numbers: number[12,2,23];
let another_number_list: Array<number> = [18,21,2555];
```

# Interfaces
We can define how the functionalities should be moduled
It is similar to a class, but without any kind of data in the interface
It's just a definition (no methods) of a module

# Decorators
Are function that are invoked with a prefixed '@'
We can decorate classes, methods, properties and parameters with a decorator that return the same data as in input of it but it has been argument in some way.

# Constructor
Without a constructor method, is possible define an instance of a class without parenthesis.

```javascript
class House {
    private sayHello('Hi from the house!');
}

let myHouse = House;
```
Moreover we don't need to have the properties of an object defined in the class, but we can define it into its constructor:

```javascript
class ObjectGeneric<TYPE1>{
    constructor(private itsValue: TYPE1){
        //do something..
    }
}
```

# Installation
```bash
npm install -g typescript
```

# Compiler
We can use the -w option to watch the file and transpile in js all the time that the ts file is saved.

```bash
tsc -w example.ts
```

# Lunch Live server
In order to run a live instance of Node with our ts contribution we need to:

1. compile the required ts in js file
2. create an index.html with a script tag with the src of required js files.
3. invoke from the terminal:

```bash
live-server
```

# Test from terminal
1. compile the required ts in js file
2. invoke from the terminal:
```bash
node <file_without_extension>
```

# Namespaces
Are used to define a specific module and protect its properties from the global variables, because those properties should be accessible only from the namespace or using an export

```javascript
namespace myNamespace {

    //I need to export the function to use it outside the namespace..
    export function displayData(){
        return 'I am inside a ts namespace';
    }
}

console.log(myNamespace.displayData());
```

To use the namespace values outside we need to define a new file and attach a reference to the specific namespace

```javascript
///<reference path="moduleOne.ts"/>
console.log(myNamespace.displayData());
```

Then compile it in the proper way (with the flag option --outFile):

```bash
tsc outside_file --outFile outside_file.js
```

Looking to the js implementation is possible see that the namespace property is added to the outside_file.js

```javascript
var myNamespace;
(function (myNamespace) {
    myNamespace.text = 'I am inside a ts namespace';
    //I need to export the function to use it outside the namespace..
    function displayData() {
        return myNamespace.text;
    }
    myNamespace.displayData = displayData;
})(myNamespace || (myNamespace = {}));
///<reference path="moduleOne.ts"/>
console.log(myNamespace.displayData());
```