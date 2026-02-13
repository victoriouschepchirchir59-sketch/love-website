console.log("Hello World");
const name = "Alice";
const hobbies = ["reading", "traveling", "coding"];
console.log(`Name: ${name}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isstudent: false
};
console.log(`Person: ${person.firstName} ${person.lastName}, Age: ${person.age}, Student: ${person.isstudent}`);
function greet(name) {
    return `Hello, ${name}!`;
}
sayHello = greet(name);
console.log(sayHello);
const square = (number) => number * number;
console.log(`Square of 4: ${square(4)}`);
function addNumbers(a, b) {
    return a + b;
}
if (age >= 18) {
    console.log(`${name} is an adult.`);
} else {
    console.log(`${name} is a minor.`);
}
for (let hobby of hobbies) {
    console.log(`Hobby: ${hobby}`);
}
console.log("End of script.");
setTimeout(() => {
    console.log("This message is displayed after 2 seconds.");
}, 2000);
console.log("Script execution completed.");
function introducePerson(person) {
    return `Meet ${person.firstName} ${person.lastName}, who is ${person.age} years old.`;
}
console.log(introducePerson(person));
console.log(addNumbers(5, 10));
console.log(addNumbers(20, 30));
