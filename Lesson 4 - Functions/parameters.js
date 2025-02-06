//accepting parameters as inputs to the function

function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("Alice");
greetUser("Bob");

//multiple parameters

function addNumbers(num1, num2) {
    console.log("Sum: ", num1 + num2);
}

addNumbers(4, 5);
addNumbers(10, -4);


//assigning a default parameter

function dismissUser( name = "Guest"){
    console.log("Goodbye, " + name);
}

dismissUser();
dismissUser("Adam");
