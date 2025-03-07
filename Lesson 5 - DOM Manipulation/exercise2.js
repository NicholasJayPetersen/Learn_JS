//Make the <p> text red when a button is clicked.
//let button = document.getElementById("changeText");
let thisParagraph = document.getElementsByTagName("p")[0];

button.addEventListener("click", function(){
    thisParagraph.style.color = "red";
});
