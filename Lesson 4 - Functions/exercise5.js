//Modify a function so that it has a default value if no parameter is passed.

function repeatBack( phrase = "You did not say anything"){
    console.log(phrase);
}

repeatBack();
repeatBack("Message was copied to console");
