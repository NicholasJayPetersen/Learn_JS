//arithmetic operators
//Operator	Example	    Meaning
// +	    5 + 3	    Addition
// -	    5 - 3	    Subtraction
// *	    5 * 3	    Multiplication
// /	    10 / 2	    Division
// %	    10 % 3	    Modulus (remainder)
// **       2 ** 3      Exponentiation (2^3)

let a = 10;
 let b = 3;

console.log(a + b);  //outputs 13
console.log(a - b);  //outputs 7
console.log(a * b);  //ouputs 30
console.log(a / b);  //outputs 3.3333
console.log(a % b);  //outputs 1;
console.log(2 ** 3); //outputs 8

//comparison operators
//Operator	Example	Meaning
//==	5 == "5"	Equal (loose, checks value only)
//===	5 === "5"	Strict equal (checks value and type)
//!=	5 != "5"	Not equal
//!==	5 !== "5"	Strict not equal
//>	    10 > 5	    Greater than
//<	    10 < 5	    Less than
//>=	10 >= 10	Greater than or equal to
//<=	10 <= 5	    Less than or equal to

console.log(5 == "5");  // true, conly checking value
console.log(5 === "5"); //false, type is different
console.log(10 > 5);    //true
console.log(10 < 5);    //false
console.log(!true);     //false


//Logical Operators
// &&   (5 > 3) && (10 > 5)     AND(both must be true)
// ||   (5 > 3) || (10 > 5)     OR(one or the other must be true)
// !    !(5 > 3)                NOT(must be false to execute)

console.log(true && false);     //output: false
console.log(10 > 5 && 8 > 6);   //output: true

console.log(true || false);     //output: true
console.log(10 < 5 || 8 > 6);   //output: true

console.log(!true);     //output: false
console.log(!false);    //output: true
console.log(!(5>3));    //output: false
