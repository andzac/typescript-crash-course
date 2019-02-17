"use strict";
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("mammt");
var myTitle = "Here we go!";
var button = document.createElement('button');
button.textContent = "Say Mammt";
button.onclick = function () {
    alert(greeter.greet());
};
//definition of istance of Post
var post = {
    title: myTitle
};
document.body.appendChild(button);
