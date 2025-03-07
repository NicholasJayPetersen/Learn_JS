//use to get by the name of the HTML element ID
//
let title = document.getElementById("title");
console.log(title.innerText);

//use to get  by the
let paragraph = document.getElementsByClassName("info")[0];
console.log(paragraph.innerText);

//use to get by the HTML tag
let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs.length);

//returns the first matching element
let firstParagraph = document.querySelector(".info");
//returns all matching elements as NodeList
let everyParagraph = document.querySelectorAll("p");


//changing text
title.innerText = "Hello, world!";
paragraph.innerHTML = "<strong>New Content</strong>";
title.style.color = "blue";
title.style.fontSize = "30px";


//Event handling
//create a button variable by pulling the button element from the DOM
let button = document.getElementById("changeText");

//listen for the user click and perform a function
button.addEventListener("click", function(){
    title.innerText = "You clicked the button!";
});


//Creating and Removing Elements
//create
let newParagraph = document.createElement("p");
newParagraph.innerText = "This is a new paragraph!";
document.body.appendChild(newParagraph);
console.log("Paragraph was added");

document.body.removeChild(newParagraph);
console.log("Paragraph was removed");
