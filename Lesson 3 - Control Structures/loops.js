//for loop - executes specified number of times
for (let i =1; i <=5; i++){
    console.log("Number: " + i);
}

let fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}


//while loop - exectues continuously until false
let num = 1;

while (num < 5) {
    console.log("Number: " + num);
    num++;
}

//do while - runs at least once no matter what
let x = 10;

do{
    console.log("This runs at least once even if false");
    x++;
}while (x < 10);
