//Remove the < p > when another button is clicked.

let removeButton = document.getElementById("removeElement");

removeButton.addEventListener("click", function(){
    let removeP = document.getElementById("newElement");
    document.body.removeChild(removeP);
});
