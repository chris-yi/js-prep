// What is a closure?
// Code out an example closure that function properly.

// Solution 1

const closure = num => {
  const add = () => {
    console.log(num + 2);
  };
  add();
};

hello(2);

/* 

Notes:

1.  Closure:
    A closure is an inner function that has access to the scope of an enclosing function
2.  A closure has access to variables in 3 seperate scopes
    - Variables in its own scope
    - Variables in the scope of the outer function
    - Variables in the global scope
3.  Closure also has access to:
    - Its own parameters
    - Parameters of outer function(s)
4.  Like IIFE, closures are another great way to protect variables from being on the global scope.

*/

// Example 1

const globalVariable = "global var";

function outterFunc(param1) {
  const variable1 = "var one";

  function innerFunc(param2) {
    const variable2 = "var two";

    console.log("globalVariable: ", globalVariable);
    console.log("variable1: ", variable1);
    console.log("variable2: ", variable2);
    console.log("param1: ", param1);
    console.log("param2: ", param2);
  }

  innerFunc("param one");
}

outterFunc("param two");

// Using ES6

const globalVar = "Global Var";

const outerFunc = param1 => {
  const outerFuncVar = "Outer Function Variable";

  const innerFunc = param2 => {
    const innerFuncVar = "Inner Func Var";

    console.log(`[Global]`, globalVar);
    console.log(`[Outer Func Var]`, outerFuncVar);
    console.log(`[Inner Func Var]`, innerFuncVar);
    console.log(`[Param 1]`, param1);
    console.log(`[Param 2]`, param2);
  };

  innerFunc("Param 2");
};

outerFunc("Param 1");
