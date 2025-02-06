//Functions can also be stored in variables.
//must be decaled before calling
/*
Situation	                                Use Function Declaration?	    Use Function Expression?
Need a named function for reuse	            ✅ Yes	                        ❌ No
Need an anonymous function	                ❌ No	                        ✅ Yes
Storing a function in a variable	        ❌ No	                        ✅ Yes
Passing a function as a callback	        ❌ No	                        ✅ Yes
Want to use a function before defining it	✅ Yes (hoisted)	                ❌ No (not hoisted)
Need an immediate function execution (IIFE)	❌ No	                        ✅ Yes
*/

const sayHi = function(name){
    console.log("Hello, " + name + "!");
};

sayHi("Sam");
