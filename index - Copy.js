
console.log("Hello World");
let name = "Alice";
console.log(name);
let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName);

let intrestRate =0.3;
intrestRate = 1;
console.log(intrestRate);
let name1 = "Mosh";
let age = 30;
let isApproved = false;
let firstName1 = undefined;
let selectedColor = null;
let person ={
    name: "John",
    age: 30
}
console.log(person);
person.name = "Mary";
console.log(person.name);
person["name"] = "Bob";
console.log(person["name"]);
let selection = "name";
person[selection] = "Mary";
console.log(person.name);
let selectedColors = ["red", "blue"];
console.log(selectedColors);
selectedColors[2] = "green";
console.log(selectedColors.length);
console.log(selectedColors[0]);
selectedColors.push("yellow");
console.log(selectedColors);
selectedColors.unshift("purple");
console.log(selectedColors);
selectedColors.pop();
console.log(selectedColors);
selectedColors.shift();
console.log(selectedColors);
console.log(selectedColors.indexOf("blue"));
console.log(selectedColors.indexOf("pink"));

function greet(name, lastName){
    console.log("Hello " + name + " " + lastName);
}
greet("John", "Doe");
greet("Mary", "Smith");
function square(number){
    return number * number;
    function square(number){
        return number * number;
    }
}
let number = square(2);
console.log(number);
console.log(square(3));
console.log(square(4));
console.log(square(5));
const username = "Alice";
console.log(username);
let age1 = 20;





