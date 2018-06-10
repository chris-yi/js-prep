// Create an IIFE (Immediately Invoked Function Expression)

// Solution 1
(function() {
  var name = "Chris";
  console.log(name);
})();

// Solution 2
const hello = (() => {
  var greeting = "hello";
  console.log(greeting);
})();

/* 

Notes:

1.  IIFE = Immediately Invoked Function Expression
2.  Function that is executed right after it is created
3. The main reason to use a IIFE is to preserve a private scope within your function.
4.  Variables inside the IIFE are not accessible outside the function

*/



/*
Example:

(Normal way we use functions)
function doubleNumber () {
    return num * 2
}
doubleNumber(2)

(turning it into IIFE)
(function doubleNumber () {
    return num * 2
})(10)

*/