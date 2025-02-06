//if else
let age = 18;
if (age >= 18){
    console.log("You are an adult"); //outputs Adult
}else{
    console.log("You are a minor");
}

//if else-if else
let score = 85;

if (score > 90){
    console.log("Grade: A");
}else if (score > 80){
    console.log("Grade: B"); //Outputs Grade B
}else if (score >= 70){
    console.log("Grade: C");
}else if (score >= 60){
    console.log("Grade: D");
}else{
    console.log("Grade: F");
}

let temp = 95;

if (temp > 90 || temp < 40){
    console.log("Extreme weather! Stay indoors.");
}else if (temp > 60 && temp < 80){
    console.log("Perfect weather!");
}else{
    console.log("Mild weather.");
}



