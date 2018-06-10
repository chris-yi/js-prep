// tripleAdd(10)(20)(30);
// returns total of all 3 numbers added together

const tripleAdd = num1 => {
  return num2 => {
    return num3 => {
      return num1 + num2 + num3;
    };
  };
};

tripleAdd(10)(20)(30);

/* 

Notes:

We are simply creating a function that returns another function.  The answer to calling tripleAdd(10) will return another function with the value return from it.

tripleAdd function is a currying function.
    - What is curring a function?
        - a technique that takes a function with multiple arguments and makes them into a sequence of functions that takes in a single argument.


*/


// Example: 

// If we try to curry the function below, we would get our original tripleAdd function.

// function tripleAdd1(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// tripleAdd1(10, 20, 30);



// Below is another example of a curried function

// function quadrupleAdd(num1) {
//     return function(num2) {
//       return function(num3, num4) {
//         return num1 + num2 + num3 + num4;
//       };
//     };
//   }
   
//   quadrupleAdd(10)(20)(30, 40);