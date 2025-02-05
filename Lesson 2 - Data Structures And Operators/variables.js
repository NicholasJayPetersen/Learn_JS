let name = "Nick";  //can be changed later
const pi = 3.14;    //cannot be changed later
var age = 31;       //outdated way of declaring and should be avoided

let city = "Detroit";
console.log(city);

const birthYear = 1993;
console.log(birthYear);

birthYear = 2000;   //results in Uncaught TypeError: Assignment to constant variable.
