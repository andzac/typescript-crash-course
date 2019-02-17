class Greeter{
    greeting: String
    constructor(message: string){
        this.greeting = message;
    }

    greet(){
        return "Hello, " + this.greeting; 
    }
}

//definition of module post
interface Post{
    title: String;
}

let greeter = new Greeter("mammt");
let myTitle = "Here we go!"

let button = document.createElement('button');
button.textContent = "Say Mammt";
button.onclick = function(){
    alert(greeter.greet());
}

//definition of istance of Post
let post: Post = {
    title: myTitle
}

document.body.appendChild(button);