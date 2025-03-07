//Add a new <p> element saying "New element added!" when a button is clicked.

let newP = document.createElement("p");
newP.id = "newElement";
newP.innerText = "New element added!"
let anotherButton = document.getElementById("addElement");

anotherButton.addEventListener("click", function(){
    document.body.appendChild(newP);
});
